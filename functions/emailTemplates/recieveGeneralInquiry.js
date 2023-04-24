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
            </p>
            <hr />
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
