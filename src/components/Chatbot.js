import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import chatbotimg from '../images/chatbot.png'; 
import { toast } from 'react-toastify';

const call = "+91 966-299-8555";
const email = 'er.prashantghadiali@gmail.com';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#2857A4',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#2857A4',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const Chatbot = () => {
  const [isChatbotVisible, setChatbotVisible] = useState(false);
  const [userInput, setUserInput] = useState('');

  const onButtonClick = () => {
    // Simulating a PDF download logic
    const data = "Prashant_Ghadiali_Resume.pdf"; 
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Prashant_Ghadiali_Resume.pdf'; // Change the filename as needed
    link.click();
    toast.success("Prashant Resume Downloaded")
  };

  const steps = [
    {
      id: 'Greet',
      message: `Hello, welcome to my website. Your data is secured. If you want to contact me, you can call me at ${call} or send me an email at ${email}. After the end of the chat, I will provide my email link and PDF resume.`,
      trigger: 'AskName',
    },
    {
      id: 'AskName',
      message: 'Please enter your name.',
      trigger: 'Waiting1',
    },
    {
      id: 'Waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: `Hi {previousValue}, please select your requirements. Here you can check the details of 
                Prashant's Framework/Libraries and DSA knowledge. You Can know by Clicking Below Options`,
      trigger: 'Requirement',
    },
    {
      id: 'Requirement',
      options: [
        {
          value: 'React',
          label: 'React',
          trigger: 'React',
        },
        {
            value: "Node",
            label: "Node",
            trigger: "Node"
        },
        {
            value: "Django",
            label: "Django",
            trigger: "Django"
        },
        {
            value: "Laravel",
            label: "Laravel",
            trigger: "Laravel"
        },
        {
            value: "Next.js",
            label: "Next.js",
            trigger: "Next.js"
        },
        {
            value: "DSA (python)",
            label: "DSA (python)",
            trigger: "DSA (python)"
        }
      ],
    },
    {
        id: 'React',
        message: 'Thanks for your response. I have knowledge of React. This website is also built on React.',
        trigger: 'Resume',
    },
    {
        id: 'Node',
        message : 'Thanks for your response. Prashant has knowledge of Node. He is top-performer in Node.js in Coding Ninjas Batch.',
        trigger: 'Resume',
    },
    {
        id: 'Django',
        message : 'Thanks for your response. Prashant has knowledge of Django. He learnt Django in Gopanear LLP. He is able to create full-stack project of Online video sharing platform. But He is not Interested in Django Framework. He is Interested in React Framework.',
        trigger: 'Resume',
    },
    {
        id: 'Laravel',
        message : 'Thanks for your response. Prashant has knowledge of Laravel. He learnt Laravel in Gopanear LLP. He is able to crete Technical Support Part in Shopify clone website. But He is not Interested in Laravel Framework. He is Interested in React Framework.',
        trigger: 'Resume',
    },
    {
        id: 'Next.js',
        message : 'Thanks for your response. Prashant has knowledge of Next.js. He learnt Next.js in Coding Ninjas.',
        trigger: 'Resume',
    },
    {
        id: 'DSA (python)',
        message : 'Thanks for your response. Prashant has knowledge of DSA (python). He learnt DSA (python) in Coding Ninjas.',
        trigger: 'Resume',
    },
    {
      id: 'Resume',
      component: (
        <>
          <center>
            <button className="btn btn-info btn-lg mt-2" onClick={onButtonClick}>
              Download my PDF Resume
            </button>
            <button className="btn btn-link btn-lg mt-2"><a  href='https://www.linkedin.com/in/prashant-ghadiali-167025166' target="_blank" style={{textDecoration: "none" }} >LinkedIn profile</a></button>               
            <button className="btn btn-link btn-lg mt-2"><a  href='https://wa.me/+919662998555?' target="_blank" style={{textDecoration: "none"}} >Whatsapp</a></button>              <button className="btn btn-link btn-lg mt-2"><a  href='https://github.com/prashantghadiali' target="_blank" style={{textDecoration: "none"}} >Git</a></button>
          </center>
        </>
      ),
      end: true,
    },
  ];

  const chatbotClicked = () => {
    setChatbotVisible(true);
  };

  const chatbotClickedHeader = () => {
    setChatbotVisible(false);
  };

  const handleUserInput = (input) => {
    setUserInput(input);
  };

  return (
    <div>
      <div onClick={chatbotClicked} style={{ display: isChatbotVisible ? 'none' : 'block' }}>
        <img className="trigger" src={chatbotimg} height={80} alt="" srcSet="" />
      </div>
      <div onClick={chatbotClickedHeader} className="triggerd" style={{ display: isChatbotVisible ? 'block' : 'none' }}>
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={steps}
            className="chatbot"
            handleEnd={() => setChatbotVisible(false)}
            hideUserInput={false} // Set to false to show the input field
            userInput={{
              component: <textarea className="sc-kAzzGY jpJyWr rsc-input" placeholder="Type the message ..." value={userInput} onChange={(e) => handleUserInput(e.target.value)} />,
              buttonStyle: { backgroundColor: '#2857A4' },
              onComplete: (value) => handleUserInput(value),
            }}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Chatbot;
