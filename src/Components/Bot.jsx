import React from 'react'

const Bot = () => {
  return (
    <div className='sm:text-lg'>
      {/* <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script> */}
<df-messenger
  intent="WELCOME"
  chat-title="helloworld"
  agent-id="9f23fbc5-4f39-4ff7-b932-8a72dd504212"
  language-code="en"
></df-messenger>
    </div>
  )
}

export default Bot
