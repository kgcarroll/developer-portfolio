/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */

import { GiSettingsKnobs } from 'react-icons/gi'
import { RiUserSettingsLine } from 'react-icons/ri'
import { BiCategoryAlt } from 'react-icons/bi'
import { definePlugin, type DocumentDefinition } from 'sanity'
import { type StructureResolver } from 'sanity/desk'

export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: 'settings',
    document: {
      // Hide 'Settings' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => templateItem.templateId !== type)
        }

        return prev
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
})

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
// like how "Post" and "Author" is handled.
export const settingsStructure = (
  typeDef: DocumentDefinition
): StructureResolver => {
  return (S, context) => {
    // The `Settings` root list item
    const settingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
      S.listItem()
        .title(typeDef.title)
        .icon(typeDef.icon)
        .child(
          S.list()
            .title('Configuration')
            .items([
              S.listItem()
                .title('Global Settings')
                .icon(RiUserSettingsLine)
                .child(S.document().schemaType('global').documentId('global')),
              S.listItem()
                .title('Site Options')
                .icon(GiSettingsKnobs)
                .child(
                  S.document().schemaType('settings').documentId('settings')
                ),
              S.listItem()
                .title('Global Taxonomy')
                .schemaType('taxonomy')
                .icon(BiCategoryAlt)
                .child(
                  S.documentList()
                    .title('Global Taxonomy')
                    .filter('_type == "taxonomy"')
                    .showIcons(false)
                ),
            ])
        )

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => listItem.getId() !== typeDef.name
    )

    return S.list()
      .title('Content')
      .items([
        settingsListItem,
        S.divider(),
        ...defaultListItems.filter(
          (listItem: any) =>
            !['global', 'taxonomy', 'media.tag'].includes(listItem.getId())
        ),
      ])
  }
}
