import React from 'react'
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import chatbotimg from '../images/chatbot.png';

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

// Function will execute on click of button
const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Prashant Ghadiali Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Prashant Ghadiali Resume.pdf';
            alink.click();
        })
    })
}



const steps = [
    {
      id: 'Greet',
      message : `Hello, Welcome to my website. Your Data is secured. If you want to contact him you can call on ${call} or send him an email on ${email}. After end of Chat I will Provide his email link and PDF Resume`,
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message : 'Please enter your name',
      trigger: 'waiting1'
    },
    {
      id: 'waiting1',
      user : true,
      trigger: 'Name'
    },
    {
      id: 'Name',
      message : `Hi {previousValue}, Please select your requirements. Here you can check the details of
       Prashant's Framework/Libraries and DSA knowledge. You Can know by Clicking Below Options`,
      trigger: 'requirement'
    },
    {
      id: 'requirement',
      options: [
        {
          value: "React",
          label: "React",
          trigger: "React"
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
        },
      ]
    },
    {
      id: 'React',
      message : 'Thanks for your response. Prashant has knowledge of React. even this Website is also built on react.',
      trigger: 'resume',
    },
    {
      id: 'Node',
      message : 'Thanks for your response. Prashant has knowledge of Node. He is top-performer in Node.js in Coding Ninjas Batch.',
      trigger: 'resume',
    },
    {
      id: 'Django',
      message : 'Thanks for your response. Prashant has knowledge of Django. He learnt Django in Gopanear LLP. He is able to create full-stack project of Online video sharing platform. But He is not Interested in Django Framework. He is Interested in React Framework.',
      trigger: 'resume',
    },
    {
      id: 'Laravel',
      message : 'Thanks for your response. Prashant has knowledge of Laravel. He learnt Laravel in Gopanear LLP. He is able to crete Technical Support Part in Shopify clone website. But He is not Interested in Laravel Framework. He is Interested in React Framework.',
      trigger: 'resume',
    },
    {
      id: 'Next.js',
      message : 'Thanks for your response. Prashant has knowledge of Next.js. He learnt Next.js in Coding Ninjas.',
      trigger: 'resume',
    },
    {
      id: 'DSA (python)',
      message : 'Thanks for your response. Prashant has knowledge of DSA (python). He learnt DSA (python) in Coding Ninjas.',
      trigger: 'resume',
    },
    {
        id: 'resume',
        component: (
           <>
           <center>
                <button className="btn btn-info btn-lg mt-2" onClick={onButtonClick}>Download his PDF Resume</button>
                <button className="btn btn-link btn-lg mt-2"><a  href='https://www.linkedin.com/in/prashant-ghadiali-167025166' target="_blank" style={{textDecoration: "none" }} >LinkedIn profile</a></button>
                <button className="btn btn-link btn-lg mt-2"><a  href='https://wa.me/+919662998555?' target="_blank" style={{textDecoration: "none"}} >Whatsapp</a></button>
                <button className="btn btn-link btn-lg mt-2"><a  href='https://github.com/prashantghadiali' target="_blank" style={{textDecoration: "none"}} >Git</a></button>
            </center>
           </>
    
        ),
        end:true
    },
  ];

let trigger = document.getElementsByClassName("trigger")[0];
let triggerd = document.getElementsByClassName("triggerd")[0];

  function chatbotClicked(){
    trigger.style.display = "none";
    triggerd.style.display = "block";
  }

  function chatbotClickedHeader(){
    trigger.style.display = "block";
    triggerd.style.display = "none";
  }



const Chatbot = () => {
  return (
    <div>
        <div onClick={chatbotClicked} style={{display:'block'}} >
          <img className="trigger" src={chatbotimg} height={80} alt="" srcset="" />
        </div>
        <div onClick={chatbotClickedHeader} className="triggerd" style={{display:'none'}}>
          <ThemeProvider theme={theme}>
              <ChatBot steps={steps} className="chatbot" />
          </ThemeProvider>
        </div>
    </div>
  )
}

export default Chatbot
