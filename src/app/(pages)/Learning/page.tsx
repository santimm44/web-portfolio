import React from 'react'

const page = () => {
  return (
    <div className='text-white p-[2rem_16rem]'>

      <div className='columns-2 gap-x-32 '>

        <div id="subjectA" className='mb-12'>
          <h2 className='text-7xl mb-6 '>
            React & Next.JS
          </h2>
          <div className='columns-2'>
            <div className='break-inside-avoid'>
              <h3 className='text-4xl '> What I hope to learn</h3>
              <p>I&apos;m currently working to strengthen my skills in the following areas:</p>
              <ul className='indent-4 list-disc list-inside'>
                <li>Dynamic Routing</li>
                <li>Context API</li>
                <li>Hooks</li>
              </ul>
              <p>My goal is to increase my proficiency in these topics to <b className='text-customAccentColorGreen'>write cleaner, faster, and more maintainable code.</b></p>
            </div>
            <div className='break-inside-avoid'>
              <h3 className='text-4xl '>Resources I am studying</h3>
              <p>To build my understanding, I&apos;m diving into the following resources:</p>

              <ul className='indent-4 list-disc list-inside leading-7'>
                <li>
                  <a className='text-blue-400 hover:text-customAccentColorGreen underline italic' href="https://reactrouter.com/start/declarative/routing" target="_blank" rel="noopener noreferrer">
                    Dynamic Routing: Learning through React Router documentation
                  </a>
                </li>
                <li>
                  <a className='text-blue-400 hover:text-customAccentColorGreen underline italic' href="https://react.dev/reference/react/createContext" target="_blank" rel="noopener noreferrer">
                    Context API: Studying examples and guides on the React official site
                  </a>
                </li>
                <li>
                  <a className='text-blue-400 hover:text-customAccentColorGreen underline italic' href="https://react.dev/reference/react/hooks" target="_blank" rel="noopener noreferrer">
                    React Hooks: Deepening my knowledge of built-in Hooks through the React documentation
                  </a>
                </li>
              </ul>
              <p>
                In addition to studying, I&apos;m actively building <b className='text-customAccentColorGreen'>multiple mini-projects</b> to reinforce these concepts with hands-on experience.
              </p>
            </div>
          </div>
        </div>
        <div id="subjectB" className='mb-12 break-inside-avoid'>
          <h2 className='text-7xl mb-6'>
            SignalR & WebSockets
          </h2>
          <p className='mb-12'>
            I&apos;m currently diving into <b className='text-customAccentColorGreen'>SignalR and WebSockets</b> as part of a full-stack project my team and I are building—<b className='text-customAccentColorGreen'>SpotMe</b>, a gym-focused social app. I&apos;m responsible for implementing <b className='text-customAccentColorGreen'>one-to-one messaging</b>, and my solution is to use <b className='text-customAccentColorGreen'>SignalR</b> for real-time communication.
            <br />
            While I&apos;m just beginning this journey, I&apos;m genuinely excited to continue learning about both <b className='text-customAccentColorGreen'>WebSockets</b> and <b className='text-customAccentColorGreen'>SignalR</b>, beyond just what&apos;s needed for the current project.</p>
          <div className='columns-2'>
            <div className=''>
              <h3 className='text-4xl '>Key Areas I&apos;m Exploring</h3>
              <p>Here are the core areas I&apos;m focused on mastering:</p>
              <ul className='indent-4 list-disc list-inside'>
                <li><b>Connection Lifecycle & Protocols:</b> Understanding the WebSocket lifecycle: handshake initiation, open state, message exchange, and graceful closure.</li>
                <li><b >Full-Stack Integration:</b> Implementing real-time features with <b className='text-customAccentColorGreen'>Next.js</b> on the frontend and <b className='text-customAccentColorGreen'>ASP.NET Core C#</b> on the backend.</li>
                <li><b>Use Cases & Limitations:</b> Learning when WebSockets are ideal (e.g., real-time chat) and their constraints (e.g., no caching, limited proxy support).</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div id="subjectC" className='mb-12'>
        <h2 className='text-7xl mb-6'>
          Express.js & Backend Fundamentals
        </h2>
        <p className='mb-12'>
          I&apos;m currently learning Express.js to strengthen my skills in <b className='text-customAccentColorGreen'>JavaScript-based backend development.</b> While most of my experience has been focused on front-end technologies, I want to become more confident building complete applications—from handling routes and APIs to managing data and server logic.
          <br />
          By understanding the foundations of backend development through Express.js, I aim to build more robust, scalable, and well-structured full-stack applications.
        </p>

        <h3 className='text-4xl '>Key Areas I'm Exploring</h3>

        <p>These are the main concepts I&apos;m focusing on as I learn Express.js:</p>

        <ul className='indent-4 list-disc list-inside'>
          <li><b>Routing & Middleware:</b> Creating clean, modular routes and understanding how middleware functions in request/response cycles.</li>
          <li><b>RESTful API Design:</b> Structuring APIs for CRUD operations and understanding REST principles.</li>
          <li><b>Error Handling & Security Basics:</b> Learning how to manage errors, sanitize input, and handle common security concerns.</li>
          <li><b>Connecting to Databases:</b> Practicing database integration (e.g., MongoDB or PostgreSQL) and understanding how to manage data flow from client to server.</li>
        </ul>
      </div>

    </div>
  )
}

export default page