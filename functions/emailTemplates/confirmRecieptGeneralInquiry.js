function confirmRecieptGeneralInquiry(formData) {
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
      <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="color-scheme" content="light dark" />
		<meta name="supported-color-schemes" content="light dark" />
		<title>Quote Request: auto-response</title>
		<style type="text/css">
			@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
			* {
                font-family: 'Roboto', sans-serif;
            }
            table {
				border-spacing: 0;
			}
			td {
				padding: 0;
			}
			p {
				font-size: 15px;
			}
			img {
				border: 0;
				border-width: 0;
			}
			a {
				color: #277fd2;
				text-decoration: none;
			}
			@media screen and (max-width: 599.98px) {
				.px-600-0 {
					padding-left: 0 !important;
					padding-right: 0 !important;
				}
				.pt-600-0 {
					padding-top: 0 !important;
				}
				img.third-img-last {
					width: 200px !important;
					max-width: 200px !important;
				}
				.d-600-none {
					display: none !important;
				}
				.pr-large {
					padding-right: 140px !important;
				}
				.center-text-mobile {
					text-align: center !important;
				}
			}
			@media screen and (max-width: 549.98px) {
				.pt-550-0 {
					padding-top: 0 !important;
				}
				.pr-large {
					padding-right: 100px !important;
				}
			}
			@media screen and (max-width: 499.98px) {
				.pt-500-0 {
					padding-top: 0 !important;
				}
				.pr-large {
					padding-right: 60px !important;
				}
			}
			@media screen and (max-width: 399.98px) {
				.banner {
					height: auto !important;
					padding-top: 20px !important;
					padding-bottom: 30px !important;
				}
				.px-sm-0 {
					padding-left: 0 !important;
					padding-right: 0 !important;
				}
				.pt-400-0 {
					padding-top: 0 !important;
				}
				img.third-img {
					width: 200px !important;
					max-width: 200px !important;
				}
				.pr-large {
					padding-right: 25px !important;
				}
			}

			/* Custom Dark Mode Colors */
			:root {
				color-scheme: light dark;
				supported-color-schemes: light dark;
			}
			@media (prefers-color-scheme: dark) {
				body,
				center,
				table,
				.darkmode-bg {
					background: #2d2d2d !important;
					color: #ffffff !important;
				}
				.darkmode-transparent {
					background-color: transparent !important;
				}
			}
		</style>

		<!--[if (gte mso 9)|(IE)]>
			<style type="text/css">
				table {
					border-collapse: collapse !important;
				}
			</style>
		<![endif]-->
	</head>
	<center style="width: 100%; table-layout: fixed; background-color: #f6f9fc; padding-bottom: 40px">
		<div style="max-width: 600px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) ; border: 2px; border-color: #0fb4cc;">
			<!-- Preheader (remove comment) -->
			<div
				style="
					font-size: 0px;
					color: #fafdfe;
					line-height: 1px;
					mso-line-height-rule: exactly;
					display: none;
					max-width: 0px;
					max-height: 0px;
					opacity: 0;
					overflow: hidden;
					mso-hide: all;
				">
				<!-- Add Preheader Text Here (85-100 characters in length) -->
			</div>
			<!-- End Preheader (remove comment) -->

			<!--[if (gte mso 9)|(IE)]>
                            <table width="600" align="center" style="border-spacing:0;color:#3d3d3d;" role="presentation">
                                <tr>
                                <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                            <![endif]-->

			<table
				align="center"
				style="
					border-spacing: 0;
					color: #3d3d3d;
					font-family: 'Lato', sans-serif, Arial, Helvetica;
					background-color: #ffffff;
					margin: 0;
					padding-top: 0;
					padding-right: 0;
					padding-bottom: 0;
					padding-left: 0;
					width: 100%;
					max-width: 600px;
				"
				role="presentation">
				<!-- START HEADER -->
				<tr>
					<td
						class="three-columns"
						style="
							padding-top: 15px;
							padding-right: 0;
							padding-bottom: 6px;
							padding-left: 0;
							text-align: center;
							font-size: 0;
							background-color: #adb2ad;
						">
						<!--[if (gte mso 9)|(IE)]>
                                    <table width="100%" style="border-spacing:0;color:#4F5557;" role="presentation">
                                    <tr>
                                    <td width="200" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                <![endif]-->

						<table
							class="column"
							style="border-spacing: 0; color: #ffffff; width: 100%; max-width: 220px; display: inline-block"
							role="presentation">
							<tr>
								<td
									class="padding px-600-0"
									style="
										padding-top: 0;
										padding-right: 0;
										padding-bottom: 12px;
										padding-left: 10px;
										background-color: #adb2ad;
									">
									<table
										class="content"
										style="border-spacing: 0; color: #ffffff; width: 100%; font-size: 14px; text-align: center"
										role="presentation">
										<tr>
											<td
												style="
													background-color: #adb2ad;
													padding-top: 0;
													padding-right: 0;
													padding-bottom: 0;
													padding-left: 0;
													width: 220px;
												">
												<a href="https://www.michael-martell.com"
													><img
														src="https://i.ibb.co/rt3fbnD/white-email.png"
														width="19"
														alt=""
														style="
															border-width: 0;
															width: 100%;
															max-width: 19px;
															height: auto;
															vertical-align: middle;
														"
												/></a>
												<a
													href="mailto:email@example.com"
													target="_blank"
													style="
														font-size: 14px;
														color: #ffffff;
														text-decoration: none;
														display: inline-block;
														vertical-align: middle;
													"
													>240designworks@gmail.com</a
												>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>

						<!--[if (gte mso 9)|(IE)]>
                            </td>
                            <td width="200" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                            <![endif]-->

						<table
							class="column"
							style="border-spacing: 0; color: #4d5358; width: 100%; max-width: 190px; display: inline-block"
							role="presentation">
							<tr>
								<td
									class="padding remove-padding-600 pt-400-0"
									style="
										padding-top: 0;
										padding-right: 0;
										padding-bottom: 12px;
										padding-left: 0;
										background-color: #adb2ad;
									">
									<table
										class="content"
										style="border-spacing: 0; color: #ffffff; width: 100%; font-size: 14px; text-align: center"
										role="presentation">
										<tr>
											<td
												style="
													background-color: #adb2ad;
													padding-top: 0;
													padding-right: 0;
													padding-bottom: 0;
													padding-left: 0;
													width: 200px;
												">
												<a href="https://www.example.com"
													><img
														src="https://i.ibb.co/3ktz6SK/white-phone.png"
														width="19"
														alt=""
														style="
															border-width: 0;
															width: 100%;
															max-width: 19px;
															height: auto;
															vertical-align: bottom;
														"
												/></a>
												<a
													href="tel:1-469-269-9639"
													target="_blank"
													style="
														font-size: 14px;
														color: #ffffff;
														text-decoration: none;
														display: inline-block;
														vertical-align: middle;
													"
													>(469) 269-9639</a
												>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>

						<!--[if (gte mso 9)|(IE)]>
                                </td><td width="40" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                            <![endif]-->

						<table
							class="column d-600-none"
							style="
								border-spacing: 0;
								color: #ffffff;
								width: 100%;
								max-width: 40px;
								display: inline-block;
								vertical-align: top;
							"
							role="presentation">
							<tr>
								<td
									class="padding d-600-none"
									style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; background-color: #277fd2">
									<table class="content" style="border-spacing: 0; width: 100%" role="presentation">
										<tr>
											<td style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0"></td>
										</tr>
									</table>
								</td>
							</tr>
						</table>

						<!--[if (gte mso 9)|(IE)]>
                                </td><td width="160" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                            <![endif]-->

						<table
							class="column d-600-none"
							style="border-spacing: 0; color: #ffffff; width: 100%; max-width: 140px; display: inline-block"
							role="presentation">
							<tr>
								<td
									class="padding d-600-none"
									style="
										padding-top: 0;
										padding-right: 0;
										padding-bottom: 12px;
										padding-left: 0;
										background-color: #adb2ad;
									">
									<table
										class="content"
										style="border-spacing: 0; color: #ffffff; width: 100%; font-size: 14px; text-align: center"
										role="presentation">
										<tr>
											<td
												style="
													background-color: #adb2ad;
													padding-top: 0;
													padding-right: 0;
													padding-bottom: 0;
													padding-left: 0;
													width: 180px;
												">
												<a
													href="https://www.example.com"
													target="_blank"
													style="font-size: 14px; color: #ffffff; text-decoration: none; display: inline-block"
													>My Website</a
												>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>

						<!--[if (gte mso 9)|(IE)]>
                                </td>
                                </tr>
                                </table>
                            <![endif]-->
					</td>
				</tr>
				<!-- END HEADER -->

				<!-- START LOGO & MENU -->
				<tr>
					<td
						class="three-columns"
						style="padding-top: 0; padding-right: 0; padding-bottom: 12px; padding-left: 0; text-align: center; font-size: 0">
						<!--[if (gte mso 9)|(IE)]>
                                <table width="100%" style="border-spacing:0;color:#3d3d3d;" role="presentation">
                                <tr>
                                <td width="250" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                            <![endif]-->

						<table
							class="column"
							style="border-spacing: 0; color: #4d5358; width: 100%; max-width: 250px; display: inline-block"
							role="presentation">
							<tr>
								<td
									class="padding px-600-0"
									style="padding-top: 10px; padding-right: 0px; padding-bottom: 0; padding-left: 40px">
									<table
										class="content"
										style="border-spacing: 0; color: #3d3d3d; width: 100%; text-align: center"
										role="presentation">
										<tr>
											<td
												style="
													padding-top: 0;
													padding-right: 0;
													padding-bottom: 0;
													padding-left: 0;
													width: 100%;
													text-align: left;
													width: 250px;
												">
												<a href="https://www.michael-martell.com">
													<img
														id="site-logo"
														src="https://i.ibb.co/9btsC42/WebIcon.png"
														alt="mac"
																height="60"
														style="border-width: 0; max-width: 155px" />
												</a>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>

						<!--[if (gte mso 9)|(IE)]>
                                </td><td width="50" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                            <![endif]-->

						<table
							class="d-600-none"
							style="border-spacing: 0; width: 100%; max-width: 50px; display: inline-block"
							role="presentation">
							<tr>
								<td class="padding px-600-0" style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0">
									<table class="content" style="border-spacing: 0" role="presentation">
										<tr>
											<td style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0"></td>
										</tr>
									</table>
								</td>
							</tr>
						</table>

						<!--[if (gte mso 9)|(IE)]>
                                </td><td width="300" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                            <![endif]-->

						<table
							class="column"
							style="
								border-spacing: 0;
								color: #4d5358;
								width: 100%;
								max-width: 300px;
								display: inline-block;
								vertical-align: top;
							"
							role="presentation">
							<tr>
								<td
									class="padding px-600-0 pt-550-0"
									style="padding-top: 18px; padding-right: 15px; padding-bottom: 0; padding-left: 0">
									<table
										class="content"
										style="border-spacing: 0; color: #868686; font-size: 15px; font-weight: bold; text-align: center"
										role="presentation">
										<tr>
											<td
												class="padding content"
												style="
													padding-top: 10px;
													padding-right: 0;
													padding-bottom: 0;
													padding-left: 0;
													width: 100%;
													text-align: center;
													width: 100px;
													color: #868686;
													font-size: 15px;
													font-weight: bold;
												">
												<p style="font-size: 15px; font-weight: bold; margin: 0; display: inline">
													<a
														id="about-me"
														href="https://www.michael-martell.com/#about/"
														target="_blank"
														style="text-decoration: none; color: #868686"
														>ABOUT ME</a
													>
												</p>
											</td>

											<td
												class="padding content"
												style="
													padding-top: 10px;
													padding-right: 0;
													padding-bottom: 0;
													padding-left: 0;
													width: 100%;
													text-align: center;
													width: 100px;
													color: #868686;
													font-size: 15px;
													font-weight: bold;
												">
												<p style="font-size: 15px; font-weight: bold; margin: 0; display: inline">
													<a
														id="projects"
														href="https://www.michael-martell.com/#projects/"
														target="_blank"
														style="text-decoration: none; color: #868686"
														>PROJECTS</a
													>
												</p>
												<!-- <p style="font-size: 15px; font-weight: bold; margin: 0; display: inline">
													<a
														id="services"
														href="https://www.michael-martell/#contact/"
														target="_blank"
														style="text-decoration: none; color: #868686"
														>SERVICES</a
													>
												</p> -->
											</td>

											<td
												class="padding content"
												style="
													padding-top: 10px;
													padding-right: 0;
													padding-bottom: 0;
													padding-left: 0;
													width: 100%;
													text-align: center;
													width: 100px;
													color: #868686;
													font-size: 15px;
													font-weight: bold;
												">
												<p style="font-size: 15px; font-weight: bold; margin: 0; display: inline">
													<a
														href="https://example.com"
														target="_blank"
														style="text-decoration: none; color: #868686"
														>CONTACT</a
													>
												</p>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>

						<!--[if (gte mso 9)|(IE)]>
                                </td>
                                </tr>
                                </table>
                            <![endif]-->
					</td>
				</tr>
				<!-- END LOGO & MENU -->

				<!-- START BANNER -->
				<tr>
					<!-- 
                        https://i.ibb.co/YkS6BSc/GetQuote.gif
                        https://i.ibb.co/pd22Z3c/HireMe.gif
                        https://i.ibb.co/wQd9LMW/Gen-Inquiry.gif 
                    -->
					<td
						id="banner"
						class="banner"
						background="https://i.ibb.co/wQd9LMW/Gen-Inquiry.gif"
						width="600"
						height="380"
						style="
							background-position: right bottom;
							padding-right: 0;
							padding-left: 0;
							background-repeat: no-repeat;
							background-color: white;
							image-rendering: crisp-edges;

						">
						<!--[if (gte mso 9)|(IE)]>
                            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:380px;">
                                <v:fill type="tile" src="https://i.ibb.co/ZXgTpCY/600x380-2.jpg" />
                                <v:textbox inset="0,0,0,0">
                            <![endif]-->

						<table class="darkmode-transparent" cellpadding="0" cellspacing="0" role="presentation">
							<tr>
								<td width="600" align="left" valign="middle" class="darkmode-transparent">
									<table cellpadding="0" cellspacing="0" role="presentation" class="darkmode-transparent">
										<tr>
											<td align="left">
												<table role="presentation" class="darkmode-transparent">
													<tr>
														<!--[if (gte mso 9)|(IE)]>
															<td style="padding-top: 70px"></td>
														<![endif]-->

														<td
															class="pr-large"
															class="darkmode-transparent"
															valign="middle"
															align="left"
															style="
																padding-top: 5px;
																padding-right: 25px;
																padding-left: 25px;
																vertical-align: middle;
																font-size: 28px;
																line-height: 28px;
																text-align: left;
																width: auto;
															">
															<p
																align="left"
																style="
																	font-size: 48px;
																	line-height: 50px;
																	font-weight: bold;
																	color: #3d3d3d;
																	margin-bottom: 65px;
																">
																HOW CAN I HELP?
															</p>

															<p
																align="left"
																style="
																	font-size: 22px;
																	color: #3d3d3d;
																	line-height: 28px;
																	margin-right: auto;
																">
																Personalized
															</p>
															<p
																align="left"
																style="
																	font-size: 46px;
																	font-weight: 700;
																	color: #f27f14;
																	line-height: 48px;
																	margin-right: auto;
																	margin-top: -10px;
																	margin-bottom: -10px;
																">
																Assistance
															</p>
															<p
																align="left"
																style="
																	font-size: 25px;
																	color: #3d3d3d;
																	line-height: 28px;
																	margin-right: auto;
																">
																Every Step of the Way
															</p>
														</td>
													</tr>
												</table>
											</td>
										</tr>
										<tr>
											<td align="left" style="padding-left: 25px">
												<table
													class="darkmode-transparent"
													align="left"
													border="0"
													cellspacing="0"
													cellpadding="0"
													role="presentation">
													<tr>
														<td align="left" style="border-radius: 4px" bgcolor="#277fd2">
															<a
																href="https://www.michael-martell.com/#contact"
																target="_blank"
																style="
																	font-size: 15px;
																	font-weight: bold;
																	text-decoration: none;
																	color: #ffffff;
																	background-color: #f27f14;
																	border: 1px solid #edc215;
																	border-radius: 4px;
																	padding: 12px 17px;
																	display: inline-block;
                                                                    cursor: pointer;
																"
																> Cool!
															</a>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td height="25"> </td>
							</tr>
						</table>

						<!--[if (gte mso 9)|(IE)]>
                            </v:textbox>
                            </v:rect>
                            <![endif]-->
					</td>
				</tr>
				<!-- END BANNER -->

				<!-- START CENTERED CONTENT -->
				<tr>
					<td style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0">
						<table width="100%" style="border-spacing: 0; margin-top: 20px;"     >                                                        
							<tr>
								<td
									class="padding content"
									style="
										padding-top: 15px;
										padding-right: 20px;
										padding-bottom: 0;
										padding-left: 20px;
										width: 100%;
										text-align: center;
										font-size: 20px;
									">
									<p style="font-size: 28px; font-weight: bold; line-height: 30px; padding-bottom: 5px">
										I'm so happy you reached out!
									</p>

									<!-- title line decoration -->
									<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
										<tr>
											<td align="center">
												<table width="150" border="0" cellspacing="0" cellpadding="0" role="presentation">
													<tr>
														<!--[if (gte mso 9)|(IE)]>
                                                            <td style="padding-top:15px;padding-bottom:15px;">
                                                        <![endif]-->

														<td width="150" align="center" style="border-top: 4px solid #0fb4cc"></td>

														<!--[if (gte mso 9)|(IE)]>
                                            </td>
                                                        <![endif]-->
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr class="top">
								<td
									class="padding content"
									style="padding-right: 20px; padding-left: 20px; text-align: left; font-size: 20px">
									<p style="margin-top: 20px; ">
                                    <span>
                                        <!-- 										background-color: #ea2c5f;
																	border: 1px solid #E6507D; -->
                                    <strong style="color: #f27f14; line-height: 26px; font-size: 16px; ">
									  Thank you for reaching out to me with your inquiry! </strong
									><br />
									<span
										style="
											font-size: 15px;
											line-height: 22px;
											padding-top: 20px;
											padding-bottom: 10px;
											line-height: 23px;
											text-indent: 30px;
										">
										I appreciate your interest and I am always happy to hear from my visitors and potential customers.
                                        I would be happy to help you in any way I can, so please do not hesitate to contact me if you have 
                                        any questions, comments, or concerns. I will do my best to respond to your inquiry as soon as possible.
                                            <br /><br />
                                        If your inquiry is urgent or requires immediate attention, please feel free to call me at (469) 269-9639, and I will be happy to assist you.
                                        (Please leave a voicemail if I am unable to answer, and I will return your call as soon as possible. I am unavailable Friday Evenings until sunday mornings.)
                                        Thank you once again for your time and Inquiry. I look forward to hearing from you soon!
									</span>
                                    </p>
                                    <p style="margin-top: 20px; display: flex; gap: 10px; flex-direction: column; margin-left: 15px;">
                                                        Best regards,
                                                        <br />
                                                        <span>Michael Martell</span>
                                                        <br />
                                                        <a href="https://www.michael-martell.com" target="_blank" style="color: #656565; text-decoration: none; cursor: pointer;">www.michael-martell.com</a>
                                                    </p>

								</td>
							</tr>

						</table>
                    </td>
                </tr>
				<!-- END CENTERED CONTENT -->

                <!-- Start Data Table of responses -->
            <table class="" >
                <tr class="darkmode-transparent" data-id="react-email-hr" style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0; ">
                    <p data-id="react-email-text" style="font-size:2rem;line-height:1.75rem;margin:16px 0;font-weight:600;color:rgb(136,152,170)">Your Form Submission:</p>
                    <div style="display:flex;height:fit-content;width:auto;flex-direction:column;border-width:2px;border-color:rgb(161,161,170);padding-left:0.75rem;padding-right:0.75rem; ">
                        <!-- Data Table -->
                        <table class="darkmode-transparent" style="table-layout:auto;border-radius:0.75rem;border-color:rgb(96, 96, 96); background-color: rgb(177, 177, 177); margin-bottom: 20px; padding-bottom: 20px; border:2px">
                            <thead style="border-top-left-radius:0.5rem;border-top-right-radius:0.5rem">
                                <tr style="border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;background-color:rgb(96, 96, 96);color:rgb(209, 209, 209)">
                                    <th style="padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem">Question</th>
                                    <th style="padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem">Response</th>
                                </tr>
                            </thead>
                            <tbody style="text-align:center;color:rgb(161,161,170); margin-left: 20px; margin-right: 20px;">
                                <tr>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600;text-align: right; color:rgb(113,113,122)">Contact Type:</td>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem; text-align: left;">${contactType}</td>
                                </tr>
                                <tr>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600; text-align: right; color:rgb(113,113,122)">Date:</td>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem; text-align: left;">${date}</td>
                                </tr>
                                <tr>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600; text-align: right; color:rgb(113,113,122)">Name:</td>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem; text-align: left;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600; text-align: right; color:rgb(113,113,122)">Email:</td>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem; text-align: left;">${email}</td>
                                </tr>
                                <tr>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600; text-align: right; color:rgb(113,113,122)">Developer:</td>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem; text-align: left;">${developer}</td>
                                </tr>
                                <tr>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600; text-align: right; color:rgb(113,113,122)">Message:</td>
                                    <td style="border-width:1px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem; text-align: left;"> ${message}</td>
                                </tr>
                            </tbody>
                        </table>

                        <tr class="top">
								<td
									class="padding content"
									style="padding-right: 20px; padding-left: 20px; text-align: left; font-size: 20px">
									<p
										style="
											font-size: 13px;
											line-height: 22px;
											padding-top: 10px;
											padding-bottom: 10px;
											line-height: 23px;
                                            color:#8e8e8e;
                                            width:90%;
										">
										This email was recieved because I recieved a form submission through my website's 
                                        contact-me form. If you recieved this in error, please disregard. <strong>Your email will not be 
                                        collected, sold, or solicited to. </strong> (someone may have misentered their email). If you feel 
                                        that someone used your email maliciously (spam etc), please let me know so that I can 
                                        block your email address from future email requests. <strong>This email is not an indicator of 
                                        any subscription.</strong>
                                    </p>
								</td>
							</tr>


                        
                        <!-- START QUOTE SECTION -->
                        <tr>
                            <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                <table width="100%" style="border-spacing:0;background-color: #4980D2;border-top: 1px solid #939393;border-bottom: 1px solid #939393;" role="presentation">
                                    <tr>
                                        <td class="padding content" style="padding-top:13px;padding-bottom:15px;padding-right:20px;padding-left:20px;width:100%;text-align:center; color:#ffffff; font-size:17px;">
                                            <p style="color:#ffffff;font-size:19px;font-weight:semi-bold; font-style: italic; letter-spacing: 0.070em;">"Michael is an exceptional web developer with a proven track record of delivering high-quality work."</p>
                                            <p style="color:rgb(200, 200, 200) ;font-size:17px;">- Brian Yarbrough</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- END QUOTE SECTION -->

				<!-- START TWO COLUMNS -->
				<tr>
					<td style="padding-top: 30px; padding-right: 0; padding-bottom: 30px; padding-left: 0">
						<table width="100%" style="border-spacing: 0" role="presentation">
							<!-- First Row -->
                            <tr>
								<td class="two-columns" style="padding-left: 0; padding-right: 0; font-size: 0; text-align: center">
									<!--[if (gte mso 9)|(IE)]>
                                            <table width="100%" style="border-spacing:0;" role="presentation">
                                            <tr>
                                            <td width="300" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                        <![endif]-->

									<table
										class="column"
										style="width: 100%; max-width: 300px; display: inline-block; vertical-align: top; border-spacing: 0"
										role="presentation">
										<tr>
											<td
												class="padding"
												style="padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px">
												<table class="content" style="border-spacing: 0; text-align: center" role="presentation">
													<tr>
														<td style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0">
															
                                                            <img
																src="https://i.ibb.co/ygXH9K1/daniel-korpai-p-KRNx-Egu-Rg-M-unsplash.jpg"
																width="260"
																alt=""
																style="
																	border-width: 0;
																	width: 100%;
																	max-width: 260px;
                                                                    max-height: 260px;
                                                                    object-fit: cover;
																	height: auto;
																	display: block;
																" />
														</td>
													</tr>
													<tr>
														<td
															align="left"
															valign="middle"
															style="
																padding-top: 15px;
																padding-right: 0;
																padding-bottom: 5px;
																padding-left: 0;
															">
															<p style="margin: 0; font-size: 19px; font-weight: bold">Web Development</p>
														</td>
													</tr>
													<tr>
														<td
															align="left"
															valign="middle"
															style="
																padding-top: 5px;
																padding-right: 0;
																padding-bottom: 10px;
																padding-left: 0;
															">
															<p style="margin: 0; font-size: 15px; text-indent: 15px; margin-bottom: 10px;">
																Responsive, modern and subscription-less websites built 
                                                                from the ground up with code. Whether you are looking for a blog,
                                                                 a gallery showcasing your art, a commercial landing page 
                                                                 or an event-driven form landing page, I have you covered.
															</p>
                                                            <p style="margin: 0; font-size: 15px; text-indent: 15px;;">
																My vanilla no-filler approach, guarantees future-proof developement / 
                                                                conversion and provides complete control over the data, security
															</p>
														</td>
													</tr>
													<!-- <tr>
														<td align="left" style="padding-top: 15px">
															<table
																align="left"
																border="0"
																cellpadding="0"
																cellspacing="0"
																role="presentation"
																style="border-spacing: 0; text-align: center">
																<tr>
																	<td align="left" style="border-radius: 4px" bgcolor="#277fd2">
																		<a
																			href="https://www.michael-martell.com/"
																			target="_blank"
																			style="
																				font-size: 16px;
																				font-weight: bold;
																				text-decoration: none;
																				color: #ffffff;
																				background-color: #adb2ad;
																				border: 1px solid #277fd2;
																				border-radius: 4px;
																				padding: 10px 14px;
																				display: inline-block;
																			"
																			>Read more
																		</a>
																	</td>
																</tr>
															</table>
														</td>
													</tr> -->
												</table>
											</td>
										</tr>
									</table>

									<!--[if (gte mso 9)|(IE)]>
                                            </td><td width="300" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                        <![endif]-->

									<table
										class="column"
										style="width: 100%; max-width: 300px; display: inline-block; vertical-align: top; border-spacing: 0"
										role="presentation">
										<tr>
											<td
												class="padding"
												style="padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px">
												<table class="content" style="border-spacing: 0; text-align: center" role="presentation">
													<tr>
														<td style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0">
															<img
																src="https://i.ibb.co/ZSVWxdQ/michael-baccin-Xopau-R-Nagk-unsplash.jpg"
																width="260"
																alt=""
																style="
																	border-width: 0;
																	width: 100%;
																	max-width: 260px;
                                                                    max-height: 260px;
                                                                    object-fit: cover;
																	height: auto;
																	display: block;
																" />
														</td>
													</tr>
													<tr>
														<td
															align="left"
															valign="middle"
															style="
																padding-top: 15px;
																padding-right: 0;
																padding-bottom: 5px;
																padding-left: 0;
															">
															<p style="margin: 0; font-size: 19px; font-weight: bold">Web App Development</p>
														</td>
													</tr>
													<tr>
														<td
															align="left"
															valign="middle"
															style="
																padding-top: 5px;
																padding-right: 0;
																padding-bottom: 10px;
																padding-left: 0;
															">
															<p style="margin: 0; font-size: 15px;">
																More complicated Business-solutions for web and mobile. E-commerce, CRM, 
                                                                chatroom applications, file / image manipulation, advanced data processing or 
                                                                calculations. Reporting, notifications and full-stack (focused) web applications.
															</p>
														</td>
													</tr>
													<!-- <tr>
														<td align="left" style="padding-top: 15px">
															<table
																align="left"
																border="0"
																cellpadding="0"
																cellspacing="0"
																role="presentation"
																style="border-spacing: 0; text-align: center">
																<tr>
																	<td align="left" style="border-radius: 4px" bgcolor="#277fd2">
																		<a
																				href="https://www.michael-martell.com/"
																			target="_blank"
																			style="
																				font-size: 16px;
																				font-weight: bold;
																				text-decoration: none;
																				color: #ffffff;
																				background-color: #adb2ad;
																				border: 1px solid #277fd2;
																				border-radius: 4px;
																				padding: 10px 14px;
																				display: inline-block;
																			"
																			>Read more
																		</a>
																	</td>
																</tr>
															</table>
														</td>
													</tr> -->
												</table>
											</td>
										</tr>
									</table>

									<!--[if (gte mso 9)|(IE)]>
                                            </td>
                                            </tr>
                                            </table>
                                        <![endif]-->
								</td>
							</tr>
                            <!-- Second Row -->
                            <tr>
								<td class="two-columns" style="padding-left: 0; padding-right: 0; font-size: 0; text-align: center">
									<!--[if (gte mso 9)|(IE)]>
                                            <table width="100%" style="border-spacing:0;" role="presentation">
                                            <tr>
                                            <td width="300" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                        <![endif]-->

									<table
										class="column"
										style="width: 100%; max-width: 300px; display: inline-block; vertical-align: top; border-spacing: 0"
										role="presentation">
										<tr>
											<td
												class="padding"
												style="padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px">
												<table class="content" style="border-spacing: 0; text-align: center" role="presentation">
													<tr>
														<td style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0">
															<img
																src="https://i.ibb.co/YZDzKp0/fahim-muntashir-v-FOvo-L3onk-unsplash.jpg"
																width="260"
																alt=""
																style="
																	border-width: 0;
																	width: 100%;
																	max-width: 260px;
                                                                    max-height: 260px;;
                                                                    object-fit: cover;
																	height: auto;
																	display: block;
																" />
														</td>
													</tr>
													<tr>
														<td
															align="left"
															valign="middle"
															style="
																padding-top: 15px;
																padding-right: 0;
																padding-bottom: 5px;
																padding-left: 0;
															">
															<p style="margin: 0; font-size: 19px; font-weight: bold">Mobile App Development</p>
														</td>
													</tr>
													<tr>
														<td
															align="left"
															valign="middle"
															style="
																padding-top: 5px;
																padding-right: 0;
																padding-bottom: 10px;
																padding-left: 0;
															">
															<p style="margin: 0; font-size: 15px;">
                                                                Mobile applications bring additional benefits, such as access to location, camera, 
                                                                while providing a simple Ui. Perfect for regularly accessed functionality.
															</p>
														</td>
													</tr>
													<!-- <tr>
														<td align="left" style="padding-top: 15px">
															<table
																align="left"
																border="0"
																cellpadding="0"
																cellspacing="0"
																role="presentation"
																style="border-spacing: 0; text-align: center">
																<tr>
																	<td align="left" style="border-radius: 4px" bgcolor="#277fd2">
																		<a
																				href="https://www.michael-martell.com/"
																			target="_blank"
																			style="
																				font-size: 16px;
																				font-weight: bold;
																				text-decoration: none;
																				color: #ffffff;
																				background-color: #adb2ad;
																				border: 1px solid #277fd2;
																				border-radius: 4px;
																				padding: 10px 14px;
																				display: inline-block;
																			"
																			>Read more
																		</a>
																	</td>
																</tr>
															</table>
														</td>
													</tr> -->
												</table>
											</td>
										</tr>
									</table>

									<!--[if (gte mso 9)|(IE)]>
                                            </td><td width="300" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                        <![endif]-->

									<table
										class="column"
										style="width: 100%; max-width: 300px; display: inline-block; vertical-align: top; border-spacing: 0"
										role="presentation">
										<tr>
											<td
												class="padding"
												style="padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px">
												<table class="content" style="border-spacing: 0; text-align: center" role="presentation">
													<tr>
														<td style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0">
															<img
																src="https://i.ibb.co/QCTTTd6/solen-feyissa-HQSEvy-N56-K0-unsplash.jpg"
																width="260"
																alt=""
																style="
																	border-width: 0;
																	width: 100%;
																	max-width: 260px;
																	height: auto;
																	display: block;
                                                                    max-height: 260px;
                                                                    object-fit: cover;
																" />
														</td>
													</tr>
													<tr>
														<td
															align="left"
															valign="middle"
															style="
																padding-top: 15px;
																padding-right: 0;
																padding-bottom: 5px;
																padding-left: 0;
															">
															<p style="margin: 0; font-size: 19px; font-weight: bold">Email Development / Other</p>
														</td>
													</tr>
													<tr>
														<td
															align="left"
															valign="middle"
															style="
																padding-top: 5px;
																padding-right: 0;
																padding-bottom: 10px;
																padding-left: 0;
															">
															<p style="margin: 0; font-size: 15px; margin-bottom: 10px">
																I can create dynamic- responsive emails, video embedding, animations, links, and 
                                                                engaging templates. I ensure that emails look excellent on all legacy devices, 
                                                                browsers, email clients, on both desktop and mobile.
															</p>
                                                            <p style="margin: 0; font-size: 15px">
                                                                If I can be of use in other ways, let me know. I am an art major, and am a former 
                                                                salesperson and business owner. I understand business developement and am 
                                                                committed to a positive end-result.
															</p>
														</td>
													</tr>
													<tr>
														<td align="left" style="padding-top: 15px">
															<table
																align="left"
																border="0"
																cellpadding="0"
																cellspacing="0"
																role="presentation"
																style="border-spacing: 0; text-align: center">
																<!-- <tr>
																	<td align="left" style="border-radius: 4px" bgcolor="#277fd2">
																		<a
																			href="https://www.michael-martell.com/"
																			target="_blank"
																			style="
																				font-size: 16px;
																				font-weight: bold;
																				text-decoration: none;
																				color: #ffffff;
																				background-color: #adb2ad;
																				border: 1px solid #277fd2;
																				border-radius: 4px;
																				padding: 10px 14px;
																				display: inline-block;
																			"
																			>Read more
																		</a>
																	</td>
																</tr> -->
															</table>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>

									<!--[if (gte mso 9)|(IE)]>
                                            </td>
                                            </tr>
                                            </table>
                                        <![endif]-->
								</td>
							</tr>
						</table>
					</td>

                <!-- END TWO COLUMNS TEXT & BUTTON -->
				</tr>
				<!-- END TWO COLUMNS -->
                <hr style="color: gray; background-color: #3d3d3d; padding: 0; margin: 0; height: fit-content; margin-left: 10px; margin-right:10px;width:90%;" class="" />
                
				<!-- START FOOTER -->
				<tr>
					<td style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; background-color: #585858; ">
						<table width="100%" style="border-spacing: 0; color: #3d3d3d" role="presentation">
							<tr>
								<td
									class="three-columns"
									style="
										padding-top: 20px;
										padding-right: 0;
										padding-bottom: 15px;
										padding-left: 0;
										text-align: center;
										font-size: 0;
									">
									<!--[if (gte mso 9)|(IE)]>
                                            <table width="100%" style="border-spacing:0;color:#3d3d3d;" role="presentation">
                                            <tr>
                                            <td width="240" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                        <![endif]-->

									<table
										class="column"
										style="
											border-spacing: 0;
											color: #3d3d3d;
											width: 100%;
											max-width: 240px;
											display: inline-block;
											vertical-align: top;
										"
										role="presentation">
										<tr>
											<td
												width="240"
												class="padding px-sm-0"
												style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px">
												<table
													class="content"
													style="
														border-spacing: 0;
														color: #3d3d3d;
														width: 100%;
														font-size: 15px;
														text-align: center;
													"
													role="presentation">
													<tr>
														<td
															class="padding content"
															style="
																padding-top: 10px;
																padding-right: 0;
																padding-bottom: 8px;
																padding-left: 0;
																width: 100%;
																text-align: center;
															">
															<a href="https://www.michael-martell.com"
																><img
																	src="https://i.ibb.co/9btsC42/WebIcon.png"
																	alt="footer logo"
																	width="160"
																	style="border-width: 0; width: 160px"
															/></a>
														</td>
													</tr>
                                                    <!-- Social Icons -->
													<tr>
														<td
															style="
																padding-top: 5px;
																padding-right: 0;
																padding-bottom: 5px;
																padding-left: 0;
																width: 100%;
																text-align: center;
															">
                                                         


                                                            <a href="https://www.linkedin.com/in/martell01/"
																><img
																	src="https://i.ibb.co/HFPjpBg/Linkedin-Brands.png"
																	alt="linkedin"
																	width="28"
																	style="border-width: 0; padding-right: 1px; max-width: 28px cursor-pointer"
															/></a>
                                                            <a href="https://github.com/gold240sx"
																><img
																	src="https://i.ibb.co/By9yPmJ/Github-Square.png"
																	alt="github"
																	width="28"
																	style="border-width: 0; padding-right: 1px; max-width: 28px cursor-pointer"
															/></a>
															<a href="https://stackoverflow.com/users/16441693/michael-martell"
																><img
																	src="https://i.ibb.co/Jtgj5jT/Stack-Overflow.png"
																	alt="linkedin"
																	width="28"
																	style="border-width: 0; padding-right: 1px; max-width: 28px cursor-pointer"
															/></a>
														</td>
													</tr>
													<tr>
														<td
															style="
																padding-top: 5px;
																padding-right: 0;
																padding-bottom: 5px;
																padding-left: 0;
															">
															<p style="font-size: 15px; color: #ffffff">Web / Software Developer</p>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>

									<!--[if (gte mso 9)|(IE)]>
                                            </td><td width="180" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                        <![endif]-->

									<table
										class="column"
										style="border-spacing: 0; width: 100%; max-width: 170px; display: inline-block; vertical-align: top"
										role="presentation">
										<tr>
											<!-- <td
												width="180"
												class="padding px-sm-0"
												style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px">
												<table
													class="content"
													style="border-spacing: 0; width: 100%; font-size: 15px; text-align: center"
													role="presentation">
													<tr>
														<td>
															<p
																style="
																	font-size: 16px;
																	color: #ffffff;
																	font-weight: bold;
																	padding-bottom: 4px;
																">
																Our Location
															</p>
															<p style="font-size: 15px; color: #ffffff; padding-bottom: 4px">
																100 Street Name
															</p>
															<p style="font-size: 15px; color: #ffffff; padding-bottom: 4px">
																City, State, 88888
															</p>
															<p style="font-size: 15px; line-height: 20px; color: #ffffff">
																<a href="tel:1-800-888-8888" style="color: #ffffff; text-decoration: none"
																	>(469) 269-9639</a
																>
															</p>
														</td>
													</tr>
												</table>
											</td> -->
										</tr>
									</table>

									<!--[if (gte mso 9)|(IE)]>
                                            </td><td width="180" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                        <![endif]-->

									<table
										class="column"
										style="
											border-spacing: 0;
											color: #3d3d3d;
											width: 100%;
											max-width: 180px;
											display: inline-block;
											vertical-align: top;
										"
										role="presentation">
										<tr>
											<td
												width="180"
												class="padding px-600-0"
												style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px">
												<table
													class="content"
													style="
														border-spacing: 0;
														color: #3d3d3d;
														width: 100%;
														font-size: 15px;
														text-align: center;
													"
													role="presentation">
													<tr>
														<td
															style="
																padding-top: 0;
																padding-right: 10px;
																padding-bottom: 0;
																padding-left: 10px;
															">
															<p
																style="
																	font-size: 18px;
																	color: #ffffff;
																	font-weight: bold;
																	padding-bottom: 4px;
																">
																Have Questions?
															</p>
															<p style="font-size: 15px; color: #ffffff; padding-bottom: 4px">
																<a
																	href="mailto:240designworks@gmail.com"
																	target="_blank"
																	style="text-decoration: none; color: #ffffff"
																	>Contact Me</a
																>
															</p>
															<p style="font-size: 15px; color: #ffffff; padding-bottom: 4px">
																<a
																	href="https://www.michael-martell.com/"
																	target="_blank"
																	style="text-decoration: none; color: #ffffff"
																	> Website</a
																>
															</p>
															<p style="font-size: 15px; color: #818181; padding-bottom: 4px">
                                                                Available Sun-Fri
															</p>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>

									<!--[if (gte mso 9)|(IE)]>
                                            </td>
                                            </tr>
                                            </table>
                                        <![endif]-->
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<!-- END FOOTER -->

				<!-- START SOCKET -->
				<tr>
					<td style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0">
						<table width="100%" style="border-spacing: 0; background-color: #585858" role="presentation">
							<tr>
								<td
									class="padding content"
									style="
										background-color: #585858;
										padding-top: 10px;
										padding-right: 0;
										padding-bottom: 13px;
										padding-left: 0;
										width: 100%;
										text-align: center;
										font-size: 16px;
										color: #ffffff;
										width: 600px;
										border-top: 2px solid #c4c7c9;
									">
									<p style="font-size: 16px; line-height: 22px; padding-top: 2px; padding-bottom: 2px">
										<a href="https://example.com" target="_blank" style="text-decoration: none; color: #ffffff"
											>&copy; michael-martell.com</a
										>
									</p>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<!-- END SOCKET -->
			</table>

			<!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                <![endif]-->
		</div>
	</center>
</html>
        `,
    }
}

module.exports = confirmRecieptGeneralInquiry
