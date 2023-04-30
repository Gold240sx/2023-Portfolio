export const useSendEmail = ({ formData }) => {
    const { email, subject, body } = formData
    window.location.href = `mailto: ${email} ?subject= ${subject} &body= ${body} `
}
