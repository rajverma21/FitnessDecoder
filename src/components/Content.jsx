import React from 'react'

const Content = ({ selectedOption }) => {
  return (
    <div className='flex-1 px-[4.3rem] py-[4rem] bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-l-lg'>
      <h2 className='text-[5.5rem] text-[#232121] font-bold mb-[3.5rem] underline underline-offset-8'>
        {selectedOption}
      </h2>
      {selectedOption === 'Introduction' && (
        <div className='w-[70%]'>
          <p className='text-[1.6rem]'>
            At FitnessDecoder, we are committed to respecting the privacy and
            confidentiality of the information that you entrust us with. Our
            Privacy Policy outlines the policies and procedures regarding the
            collection, use and disclosure of Personal Information from users.
            Please review this Privacy Policy carefully. In order to guarantee
            privacy to the client, we maintain the client's anonymity and work
            in accordance with confidentiality policies to ensure that all
            personal and health information received is maintained and
            transmitted through a highly secure environment. It is recommended
            that you do not use the website, mobile application(s) or the
            related Services if any of the terms of this Privacy Policy are not
            in accordance with the applicable laws of your country.
          </p>
        </div>
      )}
      {selectedOption === 'Changes to Policy' && (
        <div className='w-[70%]'>
          <p className='text-[1.6rem]'>
            FitnessDecoder reserves the right to change or remove any part of
            the Privacy Policy without notice or liability to any third party.
            In the event there are significant changes in the way we treat your
            Personal Information, or in the Privacy Policy, we may take
            reasonable effort, but are in no way obligated, to display a notice
            on the website or send you an email, so that you may review the
            changed terms prior to continuing to use the platform.As always, if
            you object to any of the changes to our terms, and you no longer
            wish to use the platform, you can contact FitnessDecoder to
            discontinue using our platform and deactivate your account if you
            are registered with us directly. If you are signed up on our
            platform using a third-party platform or are accessing our Services
            through your employer, then in order to deactivate your account or
            no longer use our Services, you will have to contact the third party
            platform or your employer.Unless stated otherwise, our current
            Privacy Policy applies to all information that FitnessDecoder has
            about you and your account. Using the Services on the websites,
            mobile application(s) or accessing the websites, mobile
            application(s) after a notice of change has been sent to you or
            published on our website shall constitute your consent to the
            changed terms.
          </p>
        </div>
      )}
      {selectedOption === 'Grievance Redressal' && (
        <div className='w-[70%]'>
          <p className='text-[1.6rem]'>
            To address the grievances of the users, FitnessDecoder has set up a
            Grievance Redressal Forum. In case you are dissatisfied with any
            aspect of our Services, you may contact our Grievance Redressal at support@fitnessdecoder.com. We assure you a
            time bound solution not exceeding one month from the date of your
            complaint.
          </p>
        </div>
      )}
      {selectedOption === 'Minimum Age' && (
        <div className='w-[70%]'>
          <p className='text-[1.6rem]'>
            Our Services, website, and mobile application(s) are not directed to
            persons under the age of 18 years. We do not knowingly solicit
            anyone under the age of 18 to participate independently in any of
            our Services. By choosing to visit and/or avail any Services and/or
            product and/or resource from FitnessDecoder, the user confirms that
            they are above 18 years of age and are not otherwise incompetent to
            contract under the Indian Contract Act, 1872 and are legally allowed
            to take decisions of their own. If You are between 13 and 18 years
            of age, please read through FitnessDecoder Privacy Policy and the
            FitnessDecoder Terms of Service with Your parent or legal guardian,
            and in such a case the Agreement shall be deemed to be a contract
            between FitnessDecoder and Your legal guardian or parent and to the
            extent permissible under applicable laws, enforceable against You.
            Anyone under 13 is strictly prohibited from creating an account
            and/or Using the Service.If Your Institution specifies a different
            age restriction, such as at least 18 and above, as a condition of
            using this Service, that restriction shall apply rather than the one
            above.
          </p>
        </div>
      )}
      {selectedOption === 'Security' && (
        <div className='w-[70%]'>
          <p className='text-[1.6rem]'>
            We employ administrative, physical, and technical measures designed
            to safeguard and protect information under our control from
            unauthorised access, use, and disclosure. When we collect, maintain,
            access, use, or disclose your Personal Information, we will do so
            using systems and processes consistent with industry standards in
            information privacy and security. In keeping with professional
            standards, Wellness Professionals might be required to maintain
            records of both online and offline sessions. In spite of the
            security measures undertaken by us, we strongly discourage you from
            posting your Personal Information in forums, comments or any other
            publicly accessible places on our platform. FitnessDecoder shall not
            be held responsible for use or misuse of any information pertaining
            to or shared by the User with relation to its Services. The User
            will not hold FitnessDecoder liable for any issue related to data
            storage and/or security. It is your responsibility to ensure the
            privacy and security of your email account and phone messages so
            they cannot be accessed by third-party. FitnessDecoder will use one
            or both of these channels to communicate with you regarding a range
            of information related to your psychological wellness.
            FitnessDecoder shall not be liable for any breach in
            confidentiality, should your email or text messages be accessed by a
            third-party, with or without your consent.
          </p>
        </div>
      )}
      {selectedOption === 'Confidentiality' && (
        <div className='w-[70%]'>
          <p className='text-[1.6rem] my-[0.5rem]'>
            FitnessDecoder maintains the confidentiality of information
            disclosed during personal consultation. Any information shared with
            FitnessDecoder is confidential and not shared with anyone, including
            your organization, with certain exceptions where confidentiality may
            be breached. The case where confidentiality will be breached is if:
            the Wellness Professional or FitnessDecoder perceives there to be a
            serious and/or significant and/or imminent risk of harm to the
            health or safety of a person or the public or self; disclosure is
            required by law; you file a private healthcare claim and the insurer
            requires information. Except for the reasons outlined above, the
            Personal Information shared on FitnessDecoder will only be shared
            with others after permission has been granted by you orally or by
            way of email/letter/fax. All staff members of FitnessDecoder,
            including all FitnessDecoder professionals, employees, contracted
            professionals or trainees, are required to follow this
            confidentiality policy. The User agrees to indemnify FitnessDecoder
            for any breach in confidentiality of the User’s Personal
            Information. If the User accesses FitnessDecoder through a
            third-party platform the User indemnifies FitnessDecoder against any
            data breaches that occur due to any acts of commission or omission
            from the third-party platform.
          </p>
        </div>
      )}
      {selectedOption === 'Log Data' && (
        <div className='w-[70%]'>
          <p className='text-[1.6rem] my-[0.5rem]'>
            When you visit the platform, our servers automatically record
            information that your browser or mobile application sends (“Log
            Data”). This Log Data may include information such as your
            computer’s Internet Protocol (“IP”) address, browser type, device
            name, operating system version, configuration of the app when
            accessing the Platform, the webpage you were visiting before you
            came to our Services, pages of our platform and Services that you
            visit, the time spent on those pages, information you search for on
            our Services, access times and dates, and other statistics. We use
            this information to analyse trends, administer the site, track your
            location, gather broad demographic information for aggregate use,
            increase user-friendliness and tailor our Services to better suit
            your needs.
          </p>
        </div>
      )}
      {selectedOption === 'Cookies' && (
        <div className='w-[70%]'>
          <p className='text-[1.6rem] my-[0.5rem]'>
            We use “cookies” to collect information and smoothen your experience
            on our platform. A cookie is a small data file that we transfer to
            your device’s hard disk for record-keeping purposes. We use cookies
            for two purposes. First, we may utilise persistent cookies to save
            your user credentials for future logins to the Services. Second, we
            may utilise session ID cookies to enable certain features of the
            Services, to better understand how you interact with the Services
            and to monitor aggregate usage by users of the Services and online
            traffic routing on the Services. Unlike persistent cookies, session
            cookies are deleted from your computer when you log off from the
            Services and then close your browser.
          </p>
          <p className='text-[1.6rem] my-[0.5rem]'>
            We may work with third parties that place or read cookies on your
            browser to improve your user experience. In such cases, by using the
            third party services through our platform, you consent to their
            Privacy Policy and terms of use and agree not to hold FitnessDecoder
            liable for any issues arising from such use.You can instruct your
            browser, by changing its options, to stop accepting cookies or to
            prompt you before accepting a cookie from the websites you visit. If
            you do not accept cookies, however, you may not be able to use all
            features or functionalities of the platform.
          </p>
        </div>
      )}
      {selectedOption === 'Personal Information' && (
        <div className='w-[90%]'>
          <p className='text-[1.6rem] my-[0.5rem]'>
            To enable you to engage with our Services, we will use personal
            information about yourself - provided directly to us or to a third
            party or your organisation - to contact or identify you, such as
            your name, phone number, emergency contact number, gender,
            occupation, hometown, personal interests, your email address,
            reason(s) for cancelling an appointment with a healthcare
            professional, medical history and any other information that the
            Wellness Professional might require from you. We also collect
            information you provide from responses, in-app inputs, assessments
            or the feedback you send to us. If you communicate with us by email
            or phone, any information provided in such communication may be
            collected as personal information (“Personal Information”). The main
            reason we collect this Personal Information is to provide you a
            smooth, efficient and customised experience.
          </p>
          <p className='text-[1.6rem] my-[0.5rem]'>
            The collection of Personal Information also enables the user to
            create an account and profile that can be used to interact with our
            wellness professionals. You may change some of the information that
            you provide through your account page at the website or profile
            details for the mobile application(s).We may use your Personal
            Information to: Identify and reach you; Resolve service and billing
            problems via telephone or email. Assist you in scheduling
            appointments, remind you of upcoming or follow-up appointments, as
            well as cancelled appointments. Provide you with further
            information, products and services and newsletters. Better
            understand users’ needs and interests. Personalise your experience.
            Run statistical research (such research will only use your
            information in an anonymous way and cannot be linked back to you)
            Detect and protect us against error, fraud, and other criminal
            activity. Make disclosures as may be required under applicable law.
            Improve our website, mobile application(s) in order to better serve
            you. Allow us to better service you in responding to your customer
            service requests. Run a contest, promotion, survey or other site,
            mobile application feature.
          </p>
          <p className='text-[1.6rem] my-[0.5rem]'>
            Your information is used by the Wellness Professionals and our app
            algorithms to better assess your condition and provide you with the
            most suitable counselling service or digital experience. Your
            Personal Information is held safe by the Wellness Professional
            working with you and not normally shared with other Wellness
            Professionals. However, there may be certain occasions when
            FitnessDecoder and/or Wellness Professionals use third-party tools
            to tailor the counselling sessions and in-app experience. In such
            cases, only minimal information as required is shared with others.
            We are dedicated to maintaining the privacy and integrity of your
            Personal Information. If you decide at any time that you no longer
            wish to receive certain communications from us, you can inform us by
            writing to support@fitnessdecoder.com.
          </p>
        </div>
      )}
      {selectedOption === 'Nature of Service' && (
        <div className='w-[80%]'>
          <p className='my-[1rem] text-[1.6rem]'>
            FitnessDecoder is a psychological wellness platform that delivers
            emotional wellness products and services to individuals and
            organizations. These include, but are not restricted to, corporate
            wellness programmes through which employees of organizations avail
            various products and services. FitnessDecoder offerings may
            include/are:
          </p>
          <ul className='list-disc text-[1.6rem] px-[3rem]'>
            <li className='my-[0.3rem]'>
              Screening on Emotional Wellbeing & Personality parameters.
            </li>
            <li className='my-[0.3rem]'>
              Self-assessments and psychological tests.
            </li>
            <li className='my-[0.3rem]'>
              Online and face-to-face consultation with expert Psychological
              Wellness Professionals (who have been authorised by FitnessDecoder
              to use the platform for delivering their Services).
            </li>
            <li className='my-[0.3rem]'>
              Workshops and/or webinars delivered by trained Psychological
              Wellness Professionals.
            </li>
            <li className='my-[0.3rem]'>
              Self-help tools, content and programmes through a range of
              channels including, but not restricted to websites, mobile
              applications and emails.
            </li>
            <li className='my-[0.3rem]'>
              Guide chat packs where clients may be able to exchange encrypted
              private messages with their Psychological Wellness Professional in
              addition to online consultation.
            </li>
            <li className='my-[0.3rem]'>
              Content Library (Audio visuals, Blogs, Articles etc.)
            </li>
          </ul>
          <p className='my-[0.5rem] text-[1.6rem]'>
            The services offered by FitnessDecoder are in compliance with our
            client anonymity and confidentiality policies.
          </p>
          <p className='my-[0.5rem] text-[1.6rem]'>
            FitnessDecoder reserves the right to add or remove products and
            services from its overall offerings without prior notification.
          </p>
          <p className='my-[0.5rem] text-[1.6rem]'>
            The aforementioned shall hereinafter be referred to as “Services”.
          </p>
        </div>
      )}

      {selectedOption === 'Consent' && (
        <div className='w-[70%]'>
          <p className='text-[1.6rem] my-[0.7rem] '>
            By using the platform, providing us your Personal Information or by
            making use of the features provided by the platform or by making a
            payment to FitnessDecoder, you hereby provide your consent to the
            collection, storage, processing, disclosure and transfer of your
            personal information in accordance with the provisions of this
            Privacy Policy.
          </p>
          <p className='text-[1.6rem] my-[0.7rem] '>
            You acknowledge that you are providing your Personal Information out
            of your free will, either directly to FitnessDecoder or through a
            third-party or your organization. You have the option to not provide
            us the personal information sought to be collected. You will also
            have an option to withdraw your consent at any point, provided such
            withdrawal of consent is intimated to us in writing to{' '}
            <a className='text-blue-600' href='mailto:rajverma42244@gmail.com'>
              support@fitnessdecoder.com
            </a>
            . Notwithstanding this, if you are accessing our platform through a
            third-party or your organisation, you will have an option to
            withdraw your consent at any point, provided you explicitly inform
            the third party or your organisation about such withdrawal of
            consent in writing, who would then inform us to take the appropriate
            action.
          </p>
          <p className='text-[1.6rem] my-[0.7rem] '>
            If you do not provide us with your Personal Information or if you
            withdraw the consent at any point in time, we shall have the option
            to not fulfill the purposes for which the said Personal Information
            was sought and we may restrict your use of the platform.
          </p>
        </div>
      )}
    </div>
  )
}

export default Content
