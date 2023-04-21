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
                <hr>
            </p>
            <p>
                Dear Hiring Manager/Recruiter/CEO,

                Thank you for your recent email expressing interest in an employment or hiring opportunity. I am honored that you have considered me for this opportunity.
                This email confirms that I have received your email. I will get back to you as soon as possible with my thoughts and any additional information you may require.
                Please know that I greatly appreciate your consideration and the time you have taken to reach out to me. I am excited at the prospect of building a working 
                relationship with you and exploring any opportunities that may be available.

                Thank you once again for your interest in my skills and experience. I look forward to discussing this further with you.

                Best regards,
                    Michael Martell
            </p>
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
