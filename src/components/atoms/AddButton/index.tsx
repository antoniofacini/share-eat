interface IAddButton {
  isVariant?: boolean
  handler: () => void
}

const AddButton = ({ isVariant, handler }: IAddButton) => {
  return isVariant ? (
    <div className="w-fit p-4 border-black rounded-full bg-yellow" onClick={handler}>
      <svg
        aria-label="adicionar mais items"
        width="25"
        height="25"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          d="M11 2C11 1.44772 10.5523 1 10 1C9.44772 1 9 1.44772 9 2H11ZM9 18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18H9ZM18 11C18.5523 11 19 10.5523 19 10C19 9.44772 18.5523 9 18 9V11ZM2 9C1.44772 9 1 9.44772 1 10C1 10.5523 1.44772 11 2 11V9ZM9 2V10H11V2H9ZM9 10V18H11V10H9ZM10 11H18V9H10V11ZM10 9H2V11H10V9Z"
          fill="#121212"
        />
      </svg>
    </div>
  ) : (
    <div className="w-fit p-2 border-white border-2 rounded-full" onClick={handler}>
      <svg
        aria-label="adicionar mais items"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          d="M11 2C11 1.44772 10.5523 1 10 1C9.44772 1 9 1.44772 9 2H11ZM9 18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18H9ZM18 11C18.5523 11 19 10.5523 19 10C19 9.44772 18.5523 9 18 9V11ZM2 9C1.44772 9 1 9.44772 1 10C1 10.5523 1.44772 11 2 11V9ZM9 2V10H11V2H9ZM9 10V18H11V10H9ZM10 11H18V9H10V11ZM10 9H2V11H10V9Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  )
}

export default AddButton
