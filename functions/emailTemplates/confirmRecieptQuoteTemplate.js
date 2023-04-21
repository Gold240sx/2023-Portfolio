function confirmRecieptQuoteTemplate(formData) {
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
                <hr>
            </p>
            <p>
                Thank you for your interest in my web and mobile app development services. I appreciate you taking the time to contact me.
                To help me better understand your project and your specific requirements, please feel free to provide me with any additional details, images or details that you would like to further discuss regarding your project? This will help me provide you with an accurate quote and a proposal that meets your specific needs.
                Some of the information I would like to know includes:

                - What kind of website or app are you looking to build?
                - What features and functionality would you like to include?
                - Do you have any specific design or branding requirements?
                - What is your budget and timeline for the project?

                With this information from you, I will be able to provide you with a  more detailed and comprehensive quote that outlines the scope of the project, my approach, and the cost.
                Thank you for considering my services, and I look forward to hearing back from you soon!
            </p>
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

module.exports = confirmRecieptQuoteTemplate
