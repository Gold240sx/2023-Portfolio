function recieveGeneralInquiry(formData) {
    const {
        contactType,
        date,
        recievedDateandTime,
        submissionTimestamp,
        name,
        email,
        developer,
        message,
    } = formData

    return {
        text: `
            Contact Type: ${contactType}
            Date: ${date}
            RecievedDateAndTime: ${recievedDateandTime}
            submissionTimestamp: ${submissionTimestamp}
            Name: ${name}
            Email: ${email}
            Developer?: ${developer}
            Message: ${message}
        `,
        html: `
            <p>
                <strong>Contact Type:</strong> ${contactType}<br>
                <strong>Date: </strong>${date}<br>
                <strong>RecievedDateAndTime:</strong> ${recievedDateandTime}<br>
                <strong>submissionTimestamp: </strong>${submissionTimestamp}<br>
                <hr>
            </p>
            <p>
                Thank you for reaching out to me with your inquiry! I appreciate your interest and I am always happy to hear from my visitors and customers.
                I would be happy to help you in any way we can, so please do not hesitate to contact me if you have any questions, comments, or concerns. 
                I will do my best to respond to your inquiry as soon as possible.

                If your inquiry is urgent or requires immediate attention, please feel free to call me at (469) 269-9639, and I will be happy to assist you.
                Thank you once again for your time and Inquiry. I look forward to hearing from you soon!
                Best regards,
            </p>
            <p>
                <strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Developer?:</strong> ${developer}<br>
                <strong>Message:</strong> ${message}<br>
            </p>
        `,
    }
}

module.exports = recieveGeneralInquiry
