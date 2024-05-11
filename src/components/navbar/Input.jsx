export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
    readOnly
}) => {
    const handleValueChange = (event) =>{
        onChangeHandler(event.target.value, field)
    }

    const handlerInputBlur = (event) =>{
        onBlurHandler(event.target.value, field)
    }

    return(
        <>
            <div className="">
                <span>{label}</span>
            </div>

            {textarea ? (
                <textarea
                    readOnly={readOnly}
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handlerInputBlur}
                    rows={5}
                    style={{maxWidth: '400px'}}                
                />
            ) : (
                <input
                    readOnly={readOnly}
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handlerInputBlur}
                />
            )}
            <span className="">
                {showErrorMessage && validationMessage}
            </span>
        </>
    )
}