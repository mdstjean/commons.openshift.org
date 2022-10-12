"use strict";(self.webpackChunkopenshift_commons_site=self.webpackChunkopenshift_commons_site||[]).push([[843],{6859:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(3366),l=a(7294),n=a(8119),o=a(1597),s=a(7059),c=a(8900),i=["image","innerClassName"],m=function(e){var t=e.image,a=e.innerClassName,n=(0,r.Z)(e,i);if("svg"===(null==t?void 0:t.extension))return l.createElement("div",null,l.createElement("img",{className:"max-h-20",width:"128",height:"80",src:t.publicURL,alt:""}));var o=(0,s.c)(t);return l.createElement("div",n,l.createElement(s.G,{className:a,image:o,alt:""}))},u=function(e){e.onClick;var t=(0,l.useState)(""),a=t[0],r=t[1],n=function(e){r(e.target.value)},s=(0,l.useState)(""),i=s[0],u=s[1],p=function(e){u(e.target.value)},f=(0,l.useState)(""),d=f[0],b=f[1],g=function(e){b(e.target.value)};return l.createElement(o.StaticQuery,{query:"1221780650",render:function(e){return l.createElement(l.Fragment,null,l.createElement("div",{className:"relative"},l.createElement("div",{className:"flex flex-wrap gap-4"},l.createElement("div",{className:"lg:!w-[410px] flex w-full justify-center items-center"},l.createElement("label",{className:"pl-2 w-6 h-6 absolute transform left-0 pointer-events-none",htmlFor:"filterbox"},l.createElement(c.Z,{alt:"",className:"text-base-600 absolute w-full h-full"}),l.createElement("span",{className:"sr-only"},"Search participans")),l.createElement("div",{className:"shadow-underline text-base-400 w-full"},l.createElement("input",{id:"filterbox",type:"search",className:"form-input bg-base-100 dark:bg-base-0 flex pl-10 w-full placeholder-base-500 focus:bg-base-200 border-0 py-2 border-base-400 hover:border-base-500 focus:border-base-500 pr-2 h-9 md:h-10 lg:h-11 text-base-700 rounded-t-sm hover:rounded-sm hover:ring-2 hover:ring-base-500 focus:ring-2 focus:ring-primary-600 focus:rounded-sm",value:a,onFocus:n,onChange:n,placeholder:"Search participants"}))),l.createElement("div",null,l.createElement("label",{htmlFor:"filtertype"},l.createElement("span",{className:"sr-only"},"Participant Type")),l.createElement("select",{id:"filtertype",className:"rounded border-2 border-base-400 bg-base-100 dark:bg-base-0 text-base-500 hover:border-base-500 focus:text-base-700 focus:border-primary-600",defaultValue:i,onFocus:p,onChange:p},l.createElement("option",{value:""},"— Participant Type —"),l.createElement("option",{value:"all"},"All"),l.createElement("option",{value:"enduser"},"End User"),l.createElement("option",{value:"partner"},"Partner"),l.createElement("option",{value:"other"},"Other"))),"partner"===i&&l.createElement("div",null,l.createElement("label",{htmlFor:"filtersubtype",className:""},l.createElement("span",{className:"sr-only"},"Subtype")),l.createElement("select",{id:"filtersubtype",className:"rounded border-2 border-base-400 bg-base-100 dark:bg-base-0 text-base-500 hover:border-base-500 focus:text-base-700 focus:border-primary-600",defaultValue:d,onFocus:g,onChange:g},l.createElement("option",{value:""},"— Subtype —"),l.createElement("option",{value:"all"},"All"),l.createElement("option",{value:"Solution Provider"},"Solution Provider"),l.createElement("option",{value:"Service Cloud Provider"},"Service/Cloud Provider"),l.createElement("option",{value:"Distributor"},"Distributor"),l.createElement("option",{value:"ISV"},"ISV"),l.createElement("option",{value:"OpenShift"},"OpenShift"),l.createElement("option",{value:"OpenStack"},"OpenStack"))))),l.createElement("ul",{className:"flex flex-wrap items-center gap-4 md:gap-8"},e.allParticipantsYaml.nodes.filter((function(e){return""===i||"all"===i||e.metatag1===i})).filter((function(e){return"partner"!==i||""===d||"all"===d||e.metatag2===d})).filter((function(e){return-1!==e.name.toUpperCase().indexOf(a.toUpperCase())})).sort((function(e,t){return e.name.toUpperCase()>t.name.toUpperCase()?1:-1})).map((function(e){return l.createElement("li",{key:e.name,className:"max-w-[176px] p-2 group rounded-md hover:ring-4 hover:ring-primary-400 focus-within:ring-4 focus-within:ring-primary-400"},l.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.link,className:"flex flex-col items-center gap-2"},l.createElement(m,{image:e.logo,className:"w-40 h-auto"}),l.createElement("span",{className:"flex-shrink font-headings font-bold text-lg tracking-wide leading-snug group-hover:text-primary-700 group-focus:text-primary-700"},e.name)))}))))}})};function p(){return l.createElement(l.Fragment,null,l.createElement(n.Z,{title:"OpenShift Commons Participants"}),l.createElement("div",{className:"overflow-hidden text-center px-4 py-12 md:py-16 lg:pb-24"},l.createElement("div",{className:"flex flex-col items-center space-y-32 xxxpage-wrapper"},l.createElement("section",{className:"flex flex-col items-center space-y-8 w-full relative z-0"},l.createElement("h1",{className:"font-headings text-3xl lg:text-5xl text-base-800 mb-2 lg:mb-4"},"OpenShift Commons Participants"),l.createElement("p",{className:"max-w-[60ch] text-lg lg:text-xl text-base-600 mb-6"},"A community of collaborators working together."),l.createElement(u,null),l.createElement("div",{className:"absolute w-full top-0 left-0 h-full pointer-events-none z-[-1]","aria-hidden":!0},l.createElement("div",{style:{bottom:"-100px",left:"-5vw"},className:"bg-primary-100 dark:bg-accent-100 absolute rounded-full h-9 w-9"}),l.createElement("div",{style:{bottom:"350px",right:"-9vw"},className:"bg-caution-100 dark:bg-accent-100 absolute rounded-full h-12 w-12"}))))))}}}]);
//# sourceMappingURL=component---src-pages-participants-js-b2ae98e4969cdfbf97f2.js.map