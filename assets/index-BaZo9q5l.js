(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const v=`
<section class="welcome">

<h2>Hello cybersecurity enthusiasts, and hackers</h2>
  <p>Welcome, and thanks for being here.</p>

  <p>This blog is a <strong>learning journal, knowledge base, and thinking space</strong>.
    It exists for one simple reason: to document what I’m learning, share it clearly,
    and grow through explanation.</p>

  <p>I’m currently focused on <strong>ethical hacking, security fundamentals, systems,
    and low-level concepts</strong> — from networking and operating systems to tooling,
    theory, and real-world problem-solving. Each post reflects something I’ve studied,
    built, or explored, written in a way that prioritises understanding over memorisation</p>

  <p>This isn’t a blog about pretending to know everything.
    It’s about:</p>

  <ul>
    <li>Breaking complex ideas down into clear mental models</li>
    <li>Sharing progress week by week</li>
    <li>Turning confusion into structured understanding</li>
    <li>Learning in public, honestly and methodically</li>
  </ul>

  <p>You’ll find:</p>

  <ul>
    <li>Learning logs and deep dives</li>
    <li>Notes on security, systems, and software internals</li>
    <li>Explanations written for clarity, not clicks</li>
    <li>Practical insights from building and experimenting</li>
  </ul>

  <p>Everything here is intentionally <strong>static, simple, and transparent</strong> —
    just ideas, words, and diagrams. No noise. No hype. Just learning.</p>

  <p>If you’re also interested in <em>how things really work under the hood</em>,
    you’re in the right place.</p>
</section>

  `,E=`
<section class="welcome">
<img class="img-about" src="/static/about.png" alt="about"/>
<p>
  I am <strong>0x4C612048617368436F6E</strong>, a highly curious and driven learner with a strong and continuously developing passion for <strong>cybersecurity</strong>.</p>

  <p> I am deeply interested in understanding how software, operating systems, and networked systems function at a low level, and how design flaws, misconfigurations, or implementation errors can introduce security vulnerabilities.</p>
  
  <p>
  I enjoy analyzing systems from both a defensive and offensive perspective, identifying weaknesses through methodical exploration, experimentation, and reverse engineering. My approach to learning is highly hands-on, as I believe real technical understanding comes from building, breaking, and investigating systems in depth, allowing me to develop strong problem-solving skills and a solid foundation in security principles.

</p>
</section>
`,b=`
<section class="welcome">
<p>
  A <strong>stack buffer overflow</strong> (also known as a
  <em>stack-based buffer overflow</em> or <em>stack buffer overrun</em>)
  is a vulnerability that occurs when a program writes more data to a
  stack-allocated buffer than it was intended to hold. This happens when
  input exceeds the buffer’s defined bounds, causing data to overflow into
  adjacent memory locations on the call stack.
</p>

<p>
  In a stack buffer overflow, the excess data overwrites neighboring stack
  data, which can corrupt the program’s execution state. As a result, the
  program may crash, behave unpredictably, or operate incorrectly. Stack
  buffer overflows are a specific subset of the broader class of
  <strong>buffer overflow vulnerabilities</strong>.
</p>

<p>
  Overflowing a buffer on the stack is particularly dangerous because the
  stack stores critical control data, including the
  <strong>saved frame pointer</strong> (which references the current stack
  frame), <strong>return addresses</strong> for active function calls,
  <strong>function arguments</strong>, <strong>local variables</strong>, and
  <strong>saved register values</strong>. If an overflow overwrites this
  information—especially the return address—it can alter the program’s
  control flow.
</p>

<p>
  While stack buffer overflows can occur accidentally due to programming
  errors, they can also be exploited intentionally in attacks commonly
  referred to as <strong>stack smashing</strong>, where an attacker
  carefully crafts input to overwrite control data and redirect execution.
</p>

<p>
Below is an example of what the current stack frame of an executing function looks like:
</p>

<img class="stack-frame" src="https://image.slideserve.com/1392234/layout-of-typical-stack-frame-l.jpg" alt="stack frame"/>

<p>Below is an example of a typical stackBuffer Overflow, and the result show below</p>

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example.png" alt="stackBufferOverflow_Example" />

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example_output.png" alt="stackBufferOverflow_Example_output" />

<p>Another example is below, where we try to read a file, and place the content in a buffer, but not enough space in the buffer</p>

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example_ReadingFile.png" alt="stackBufferOverflow_Example_ReadingFile" />

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example_ReadingFile_InputFile.png" alt="stackBufferOverflow_Example_ReadingFile_InputFile" />

<img src="/static/stackBufferOverflow/stackBufferOverflow_Example_ReadingFile_output.png" alt="stackBufferOverflow_Example_ReadingFile_outputFile" />


<h3>References</h3>
<ul>
<li>https://en.wikipedia.org/wiki/Stack_buffer_overflow</li>
<li>https://image.slideserve.com/1392234/layout-of-typical-stack-frame-l.jpg</li>
</section>

`,k=`
<section class="welcome">
<p>
        Here I will walk through a simple implementation of <code>strlen()</code> in C and explain in detail how it works at a low level.
        While <code>strlen()</code> may appear trivial at first glance, it is an excellent example for understanding some of C’s most
        fundamental concepts, particularly pointers, arrays, and the idea of contiguous memory.
    </p>

    <p>
        In C, a string is not a distinct data type. Instead, it is represented as an array of characters stored in contiguous memory,
        terminated by a special null character (<code>'\0'</code>). This null terminator is what allows functions like
        <code>strlen()</code> to determine where the string ends. The <code>strlen()</code> function itself does not know the length
        of the string in advance; it must discover it by traversing memory until it encounters this terminator.
    </p>

    <p>
        The function takes a single argument: a pointer to a constant character (<code>const char *</code>). This pointer refers to
        the first character of the string. Because arrays in C decay into pointers when passed to functions, the pointer effectively
        represents the base address of the character array.
    </p>

    <p>
        To compute the length, we iterate through the string one character at a time. This is commonly done using a loop that starts
        at the base address of the string. A character pointer is initialized to point to the first element of the array. Since the
        characters are stored contiguously, incrementing the pointer advances it to the next character in memory.
    </p>

    <p>
        As the loop progresses, the pointer is repeatedly incremented until it points to the null terminator. At this point, the loop
        can no longer continue, as the end of the string has been reached. Importantly, no explicit index is required — pointer
        arithmetic alone is sufficient to move through the string.
    </p>

    <p>
        Once the loop exits, the length of the string can be calculated by subtracting the original base address of the string from
        the final pointer position. This subtraction yields the number of characters traversed, which corresponds to the length of
        the string (excluding the null terminator). Pointer subtraction works here because both pointers refer to positions within
        the same contiguous block of memory. Since <code>sizeof(char)</code> is 1 byte, incrementing the pointer advances the memory
        address by exactly one byte.
    </p>

    <p>
        This approach highlights a key concept in C: arrays and pointers are deeply intertwined, and many standard library functions
        rely entirely on pointer arithmetic rather than array indexing. Understanding how <code>strlen()</code> works internally
        provides valuable insight into how C programs interact directly with memory, and why careful handling of pointers is so
        important for correctness and safety.
    </p>

    <p>
      Below we have the implementation:
    </p>
    <img class="strlenInC" src="/static/strlenInC/strlenInC.png" alt="strlenInC"/>
    <img src="/static/strlenInC/strlenInC_output.png" alt="strlenInC_output"/>

</section>
`,I=`<section class="welcome">

<h1>To Do</h1>
</section>`,B=t=>{let o=t.split(" ").length;return console.log(o),Math.trunc(o/200)},h=(t,e,o)=>`
    <div>
        <h3 class="title">${t}</h3>
        <div class="clock-style">
            <img class="clock" src=${e} alt="Read Time"/>
            <span class="read-time">${B(o)} minutes read</span>
        </div>
        <div>
            ${o}
        </div>
    </div>
  `;class c{route;rootRoute="/";ethicalHackingNotesRoute="/ethical-hacking-notes";networkingBasicsRoute="/networking-basics";reverseEngineeringRoute="/reverse-engineering";welcomeToMyCyberSecurityPathRoute="/welcome-to-my-cybersecurity";aboutRoute="/about";stackBufferOverflowRoute="/stack-buffer-overflow";strlenInCRoute="/strlenInC";instagramReelDownloaderRoute="/instagramReelDownloader";constructor(e){this.route=e}navigateTo(){if(history.pushState({},"",this.route),this.route==this.rootRoute){document.getElementById("remove-post-if-not-on-route").style.display="block",document.getElementById("filter-hide").style.display="flex",document.getElementById("search").style.display="flex",document.getElementById("post").innerHTML=w();return}if(!(this.route==this.ethicalHackingNotesRoute&&window.location.pathname==this.route)&&!(this.route==this.networkingBasicsRoute&&window.location.pathname==this.route)&&!(this.route==this.reverseEngineeringRoute&&window.location.pathname==this.route)){if(this.route==this.welcomeToMyCyberSecurityPathRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none";for(let e=0;e<n.length;e++)if("/".concat(n[e].route)==this.route){document.getElementById("post").innerHTML=h(n[e].title,n[e].clockImage,v);break}return}if(this.route==this.aboutRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none",document.querySelector("#post").innerHTML=E;return}if(this.route==this.stackBufferOverflowRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none";for(let e=0;e<n.length;e++)if("/".concat(n[e].route)==this.route){document.getElementById("post").innerHTML=h(n[e].title,n[e].clockImage,b);break}return}if(this.route==this.strlenInCRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none";for(let e=0;e<n.length;e++)if("/".concat(n[e].route)==this.route){document.getElementById("post").innerHTML=h(n[e].title,n[e].clockImage,k);break}return}if(this.route==this.instagramReelDownloaderRoute&&window.location.pathname==this.route){document.getElementById("remove-post-if-not-on-route").style.display="none",document.getElementById("filter-hide").style.display="none",document.getElementById("search").style.display="none";for(let e=0;e<n.length;e++)if("/".concat(n[e].route)==this.route){document.getElementById("post").innerHTML=h(n[e].title,n[e].clockImage,I);break}return}}}}const f=new c("/"),T=new c("/ethical-hacking-notes"),C=new c("/networking-basics"),L=new c("/reverse-engineering"),O=new c("/welcome-to-my-cybersecurity"),R=new c("/about"),x=new c("/services"),S=new c("/stack-buffer-overflow"),$=new c("/strlenInC"),_=new c("/instagramReelDownloader"),l={userName:"Fallen Saint",description:"Software Engineer, Red-Team, Malware Development",profile:"/assets/userprofile.jpeg",location:"UK",locationImage:"/assets/pin.png",bitcoinAddress:"bc1quw479na2ld27rrlkpc0cxutcszddp5nva3ev0n",bitcoinAddressImage:"/assets/bitcoin.png",discord:"lahashcon",discordImage:"/assets/discord.png",post:"Posts",navigationList:[{title:"about",route:"/about"},{title:"services",route:"/services"}]},u={filter:{filter:"Filter",sort:["newest","oldest"]}},n=[{title:"Instagram Reels Downloader",description:"Tool to donwload instagram reels without the embedded watermark",keyword:"NodeJS, JavaScript, Instagram, ",date:new Date("September 19, 2026 21:03:05"),clockImage:"/assets/clock.png",route:"instagramReelDownloader",content:I},{title:"strlen() function",description:"Implementing the strlen() function in C",keyword:"strlen(), string, function",date:new Date("January 01, 2026 00:00:00"),clockImage:"/assets/clock.png",route:"strlenInC",content:k},{title:"StackBuffer Overflow",description:"Comphrensive detail about StackBuffer Overflow",keyword:"StackBuffer, Overflow",date:new Date("December 27, 2025 00:00:00"),clockImage:"/assets/clock.png",route:"stack-buffer-overflow",content:b},{title:"Welcome to my CyberSecurity Path",description:"An introduction to my CyberSecurity Path",keyword:"CyberSecurity, Malware, Networking",date:new Date("December 19, 2025 00:00:00"),clockImage:"/assets/clock.png",route:"welcome-to-my-cybersecurity",content:v}],s=[{title:"Ethical Hacking Notes",variable:T},{title:"Networking Basics",variable:C},{title:"Reverse Engineering",variable:L},{title:"Welcome to my CyberSecurity Path",variable:O},{title:"StackBuffer Overflow",variable:S},{title:"strlen() function",variable:$},{title:"Instagram Reels Downloader",variable:_}],g=[{title:"about",variable:R},{title:"services",variable:x}],w=(t=n)=>`
    ${t.map(e=>`
            <div class="repo">
                <h3 class="title">${e.title}</h3>
                <p${e.description}</p>
                <span class="language">${e.keyword}</span>
                <div class="clock-style">
                <img class="clock" src=${e.clockImage} alt="Read Time"/>
                <span class="read-time">${e.content?B(e.content):0} minutes read</span>
                </div>
                <span class="date">${e.date}</span>
            </div>
        `).join("")}
    `,M=(t,e)=>{e=="oldest"&&(t=t.sort((r,i)=>r.date?.getTime()-i.date?.getTime())),e=="newest"&&(t=t.sort((r,i)=>i.date?.getTime()-r.date?.getTime())),document.getElementById("post").innerHTML=w();const o=document.querySelectorAll(".title");for(let r=0;r<o.length;r++)for(let i=0;i<n.length;i++)if(o[r].innerHTML==n[i].title){o[r].addEventListener("click",()=>{for(let a=0;a<s.length;a++)if(n[i].title==s[a].title){s[a].variable.navigateTo();break}});break}};let p;const H=(t,e)=>{p&&clearTimeout(p),p=setTimeout(()=>{let o=e.filter(r=>{if(r.title?.toLowerCase()?.search(t.toLowerCase())>=0||r.description?.toLowerCase()?.search(t.toLowerCase())>=0||r.keyword?.toLowerCase()?.search(t.toLowerCase())>=0||r.date?.toString().toLowerCase()?.search(t.toLowerCase())>=0)return r});if(o.length==0)document.getElementById("post").innerHTML="<h1>No Results Found</h1>";else{document.getElementById("post").innerHTML=w(o);const r=document.querySelectorAll(".title");console.log(r);for(let i=0;i<r.length;i++)for(let a=0;a<n.length;a++)if(r[i].innerHTML==n[a].title){r[i].addEventListener("click",()=>{for(let d=0;d<s.length;d++)if(n[a].title==s[d].title){s[d].variable.navigateTo();break}});break}}},250)},A=()=>`
    <header class="navbar">
        <div class="nav-left">
            <span class="logo">${l.userName}</span>
            <input id="search" type="text" placeholder="Search or jump to...">
        </div>
        <div class="nav-right">
        <div class="nav-right-flex">
        <ul class="ul-nav">
            ${l.navigationList?.map(t=>`<li class="nav-item">${t.title}</li>`).join("")}
            
            </ul>
            </div>
        </div>
    </header>
`,N=()=>`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GitHub Clone</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Top Navigation Bar -->
    ${A()}

    <!-- Main Layout -->
    <main class="container">

        <!-- Left Sidebar -->
        <aside class="sidebar">
          <div class="circle">
            <img class="avatar" src=${l?.profile} alt="Avatar">
            </div>
            <h2 class="username">${l?.userName}</h2>
            <p class="bio">
                ${l?.description}
            </p>

          <div class="info">

            <div class="location-style">
              <span>
                <img class="location" src=${l.locationImage} alt="location"/>
                </span>
              <span>${l.location}</span>
            </div>

            <div class="bitcoin-style">
              <span>
              <img class="bitcoin" src=${l.bitcoinAddressImage} alt="bitcoin"/>
              </span>
              <span>${l.bitcoinAddress}</span>
              </div>

              <div class="discord-style">
              <span>
              <img class="discord" src=${l.discordImage} alt="discord"/>
              </span>
              <span>${l.discord}</span>
              </div>

              

          </div>
        </aside>

        <!-- Right Content -->
        <section class="content">
        <div class="flex-post-and-filter">
            <h2 id="remove-post-if-not-on-route">${l.post}</h2>
            <div class="flex-post-and-filter" id="filter-hide">
              <h2>${u.filter?.filter}</h2>
              <select name="filter" id="filter">
                <option value=${u.filter?.sort[0]}>${u.filter?.sort[0]}</option>
                <option value=${u.filter?.sort[1]}>${u.filter?.sort[1]}</option>
              </select>
              </div>
        </div>
          <div id="post">
          </div>

        </section>

    </main>

</body>
</html>

`;document.querySelector("#app").innerHTML=N();f.navigateTo();document.getElementById("filter")?.addEventListener("change",t=>{const e=t.target;M(n,e.value)});document.getElementById("search")?.addEventListener("input",t=>{console.log("Change");const e=t.target;H(e.value,n)});document.querySelector(".discord-style").addEventListener("click",()=>{window.open("https://discord.com/channels/@me","_blank")});const m=document.querySelectorAll(".nav-item");for(let t=0;t<m.length;t++)for(let e=0;e<l.navigationList.length;e++)if(m[t].innerHTML==l.navigationList[e].title){m[t].addEventListener("click",()=>{for(let o=0;o<g.length;o++)if(l.navigationList[e].title==g[o].title){g[o].variable.navigateTo();break}});break}document.querySelector(".logo")?.addEventListener("click",()=>{f.navigateTo();const t=document.querySelectorAll(".title");for(let e=0;e<t.length;e++)for(let o=0;o<n.length;o++)if(t[e].innerHTML==n[o].title){t[e].addEventListener("click",()=>{for(let r=0;r<s.length;r++)if(n[o].title==s[r].title){s[r].variable.navigateTo();break}});break}});window.addEventListener("popstate",()=>{window.location.pathname=="/"&&f.navigateTo();for(let t=0;t<n.length;t++){if(window.location.pathname=="/"){f.navigateTo();const e=document.querySelectorAll(".title");for(let o=0;o<e.length;o++)for(let r=0;r<n.length;r++)if(e[o].innerHTML==n[r].title){e[o].addEventListener("click",()=>{for(let i=0;i<s.length;i++)if(n[r].title==s[i].title){s[i].variable.navigateTo();break}});break}}else if(window.location.pathname=="/".concat(n[t].route)){for(let e=0;e<s.length;e++)if(n[t].title==s[e].title){s[e].variable.navigateTo();break}}break}});const y=document.querySelectorAll(".title");for(let t=0;t<y.length;t++)for(let e=0;e<n.length;e++)if(y[t].innerHTML==n[e].title){y[t].addEventListener("click",()=>{for(let o=0;o<s.length;o++)if(n[e].title==s[o].title){s[o].variable.navigateTo();break}});break}
