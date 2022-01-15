export const validateForm = ( form ) => {
    if(form.name === ''){
        throw new Error('El nombre es obligatorio')
    }  
    return true
}