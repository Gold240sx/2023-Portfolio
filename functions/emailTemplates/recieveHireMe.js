function recieveHireMe(formData) {
    const {
        contactType,
        date,
        recievedDateandTime,
        submissionTimestamp,
        company,
        contactName,
        email,
        position,
        customPosition,
        message,
    } = formData

    return {
        text: `
            Contact Type: ${contactType}
            Date: ${date}
            RecievedDateAndTime: ${recievedDateandTime}
            submissionTimestamp: ${submissionTimestamp}
            Company: ${company}
            Contact Name: ${contactName}
            Email: ${email}
            Position: ${position}
            Custom Position: ${customPosition}
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
                <strong>Company:</strong> ${company}<br>
                <strong>Contact Name:</strong> ${contactName}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Position:</strong> ${position}<br>
                <strong>Custom Position:</strong> ${customPosition}<br>
                <strong>Message:</strong> ${message}<br>
            </p>
        `,
    }
}

module.exports = recieveHireMe
