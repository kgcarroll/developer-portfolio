export default function Modal({ open, onClose, children }) {
  console.log(children)
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 z-10 flex items-center justify-center transition-colors
        ${open ? 'visible bg-black/20' : 'invisible'}
      `}
    >
      {/* Modal */}
      <div
        onClick={(event) => event.stopPropagation()}
        className={`
            m-6 mt-[10%] max-h-[80%] overflow-scroll rounded-l border border-lightGreen/50 bg-bgMain p-6 shadow  transition-all
            ${open ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
      >
        <button
          onClick={onClose}
          className="rounder-lg absolute right-2 top-2 p-1 text-sm text-lightGreen"
        >
          close
        </button>
        <div className="modal-content">
          <p className="mb-4 text-lg font-bold uppercase text-lightGreen">
            Core Duties
          </p>
          <ul className="text-s ml-5 list-disc space-y-4 text-gray-300">
            {children.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
