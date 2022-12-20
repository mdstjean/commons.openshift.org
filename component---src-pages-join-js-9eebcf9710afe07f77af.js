"use strict";(self.webpackChunkopenshift_commons_site=self.webpackChunkopenshift_commons_site||[]).push([[985],{1661:function(e,t,r){var a=r(7294),n=function(e){var t=Object.assign({},e),r=t.title,n=t.url,o=t.icon,l=t.type,s=t.className,i=t.children;return a.createElement("a",{href:n,rel:"noopener noreferrer",target:0===n.indexOf("https://")?"_blank":"_self",className:"group flex lg:h-full flex-col gap-2 min-h-[112px] ring-2 ring-primary-600 ring-inset ring-opacity-10 hover:ring-opacity-50 focus:ring-opacity-100 focus:outline-none focus:ring-outset bg-gradient-to-br "+("tertiary"===l&&"from-tertiary-200 to-success-200 hover:from-tertiary-300 hover:to-success-300 focus:from-tertiary-300 focus:to-success-300")+"\n      "+("warning"===l&&"from-alert-200 to-warning-200 dark:from-primary-200 dark:to-accent-200 hover:from-alert-300 hover:to-warning-300 focus:from-alert-300 focus:to-warning-300 dark:hover:from-primary-300 dark:hover:to-accent-300 dark:focus:from-primary-300 dark:focus:to-accent-300")+" rounded-lg p-4 "+s},a.createElement("div",{className:"flex gap-3 items-center"},a.createElement("div",{className:"h-6 w-6 text-secondary-800 flex items-center"},o),a.createElement("h3",{className:"text-xl text-secondary-800 dark:text-base-900 font-medium"},r)),a.createElement("p",{className:"ml-10 leading-snug leading group-hover:text-secondary-800 font-medium"},i))};n.defaultProps={title:"Title here",url:"/",icon:" ",type:"tertiary",children:"add a paragraph or two",className:""},t.Z=n},690:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var a=r(7294),n=r(8119),o=r(1661);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=(0,a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,c=s(e,["color","size"]);return a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));i.displayName="Calendar";var c=i,u=r(6649),f=r(2325),m=r(6195),d=r(1597);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}var h=["html","dangerouslySetInnerHTML"];var g=function(e){var t=e.html,r=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,h),n=(0,a.useRef)(null);return(0,a.useEffect)((function(){if(!t||!n.current)throw new Error("html prop cant't be null");var e=document.createRange().createContextualFragment(t);n.current.innerHTML="",n.current.appendChild(e)}),[t,n]),a.createElement("div",p({},r,{ref:n}))},b=function(){return a.createElement(g,{html:'<script src="https://www.redhat.com/libraries/dyfo-client/dist/main.js"><\/script><div class="rh-dyfo" data-rh-dyfo-instance="009ba970-dc8d-4ad9-96ea-d7aa10acc2b6"></div>'})};function y(){var e="font-headings text-3xl md:text-4xl lg:text-5xl text-base-800 mb-2 lg:mb-6",t="text-lg lg:text-xl text-base-600 pb-4 border-b border-base-300 lg:h-full max-w-[64ch]",r=(0,d.useStaticQuery)("1362400219").site.siteMetadata.socialMedia.filter((function(e){return"twitter"===e.platform}))[0].url;return a.createElement(a.Fragment,null,a.createElement(n.Z,{title:"Join Us"}),a.createElement("section",{className:"light bg-primary-800 text-primary-200 flex flex-col justify-center items-center text-center min-h-[400px] px-4 md:px-6 py-4 md:py-0"},a.createElement("div",{className:"space-y-6 max-w-[900px]"},a.createElement("h1",{className:"font-headings font-bold text-5xl md:text-6xl tracking-wide"},"Join OpenShift Commons"),a.createElement("p",{className:"text-lg lg:text-xl max-w-[64ch]"},"Commons builds connections and collaboration across OpenShift communities, projects and stakeholders. In doing so we'll enable the success of customers, users, partners, and contributors as we deepen our knowledge and experiences together."))),a.createElement("div",{className:"z-0 py-12 lg:pt-32 md:pb-40 relative dark:before:opacity-60 dark:after:opacity-60 before:scale-x-[-1] before:z-[-1] before:bg-wave-pattern before:hue-rotate-[245deg] before:bg-no-repeat before:text-transparent before:w-full after:z-[-1] before:absolute before:h-full before:top-0 before:bg-left-top after:text-transparent after:bg-wave-pattern after:rotate-180 after:hue-rotate-[245deg] after:bg-no-repeat after:w-full after:z-[-1] after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]"},a.createElement("div",{className:"absolute w-full top-0 left-0 h-full pointer-events-none z-[-1]","aria-hidden":!0},a.createElement("div",{style:{bottom:"110px",left:"10vw"},className:"bg-alert-100 dark:hidden absolute rounded-full h-8 w-8"}),a.createElement("div",{style:{bottom:"30px",right:"50%"},className:"bg-warning-100 dark:hidden absolute rounded-full h-12 w-12"}),a.createElement("div",{style:{bottom:"80px",right:"10vw"},className:"bg-primary-100 dark:hidden absolute rounded-full h-14 w-14"})),a.createElement("div",{className:"grid lg:grid-cols-2 my-12 md:my-0 gap-8 page-wrapper"},a.createElement("div",{className:"flex flex-col h-full"},a.createElement("h2",{className:e},"Enrollment"),a.createElement("p",{className:t},"Our goals go beyond code contributions. Commons is a place for companies using OpenShift to accelerate its success and adoption. To do this we'll act as resources for each other, share best practices and provide a forum for peer-to-peer communication.")),a.createElement("div",{className:"lg:order-3"},a.createElement(b,null)),a.createElement("div",{className:"mt-8 lg:mt-0 lg:order-2 flex flex-col h-full"},a.createElement("h2",{className:e},"Contribute"),a.createElement("p",{className:t},"Users, partners, customers, and contributors come together to collaborate and work together on OpenShift.")),a.createElement("div",{className:"flex flex-col gap-8 lg:order-4"},a.createElement(o.Z,{className:"lg:h-auto",title:"Past Briefings",url:"https://www.youtube.com/user/rhopenshift/playlists?flow=grid&view=1",icon:a.createElement(u.Z,{alt:""})},"Check out our video library to learn about OpenShift topics."),a.createElement(o.Z,{className:"lg:h-auto",title:"Twitter",type:"warning",url:r,icon:a.createElement(f.Z,{alt:""})},"You can get blog and event announcements on Twitter as well as our other channels."),a.createElement(o.Z,{className:"lg:h-auto",title:"Blogs",url:"mailto:community@stackrox.io?subject=Blog%20contribution&body=My%20blog%20topic%20is%20",icon:a.createElement(m.Z,{alt:""})},"Blogs are open for contribution. Is there a topic you are interested in? Let the organizers know about it. ",a.createElement("strong",null,"[needs review]")),a.createElement(o.Z,{className:"lg:h-auto",title:"Join Great Sessions",type:"warning",url:"/events/",icon:a.createElement(c,{alt:""})},"Events are lead by an OpenShift expert who would love to answer any of your questions.")))))}},6195:function(e,t,r){var a=r(7294);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=(0,a.forwardRef)((function(e,t){var r=e.color,l=void 0===r?"currentColor":r,s=e.size,i=void 0===s?24:s,c=o(e,["color","size"]);return a.createElement("svg",n({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));l.displayName="Edit",t.Z=l}}]);
//# sourceMappingURL=component---src-pages-join-js-9eebcf9710afe07f77af.js.map