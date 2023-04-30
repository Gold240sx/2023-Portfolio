function recieveQuoteTemplate(formData) {
    const {
        contactType,
        date,
        recievedDateandTime,
        submissionTimestamp,
        projectName,
        projectType,
        contactName,
        email,
        deadline,
        message,
    } = formData

    return {
        text: `
            Contact Type: ${contactType}
            Date: ${date}
            RecievedDateAndTime: ${recievedDateandTime}
            submissionTimestamp: ${submissionTimestamp}
            Project Name: ${projectName}
            Project Type: ${projectType}
            Contact Name: ${contactName}
            Email: ${email}
            Deadline: ${deadline}
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
                <strong>Project Name:</strong> ${projectName}<br>
                <strong>Project Type:</strong> ${projectType}<br>
                <strong>Contact Name:</strong> ${contactName}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Deadline:</strong> ${deadline}<br>
                <strong>Message:</strong> ${message}<br>
            </p>
        `,
    }
}

module.exports = recieveQuoteTemplate
