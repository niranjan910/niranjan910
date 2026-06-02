"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ── Carousel images ── */
const CAROUSEL_IMAGES = [
  { src:"/images/Profile_Image/About_1.png", alt:"Niranjan Kumar" },
  { src:"/images/Home_page_01.png",           alt:"Niranjan Kumar" },
];

/* ── Achievement cards ── */
const ACHIEVEMENTS = [
  { value:"2+",  label:"Live Websites",      sub:"Developed"    },
  { value:"AI",  label:"Product Builder",    sub:"& Innovator"  },
  { value:"FE",  label:"Frontend Dev",       sub:"React & Next" },
  { value:"UX",  label:"UI/UX Designer",     sub:"Figma Expert" },
];

/* ── Tech SVG icons (inline, no external deps) ── */
const Ico = {
  ChatGPT: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#10a37f" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.372L15.115 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.403-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>,
  Claude: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#d97757" d="M4.709 15.955l4.72-2.647.08-.23-.08-.128-4.72-2.645-.08.128.08.23zm7.617 4.722l-.08-.23-4.72-2.645-.08.23.08.128 4.72 2.645zm-6.39-9.81l4.72 2.645.08-.128-.08-.23-4.72-2.645-.08.23zm13.007 3.89l-4.72-2.645-.08.23.08.128 4.72 2.645zm-4.8-5.802l.08.23 4.72 2.645.08-.23-.08-.128-4.72-2.645zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"/></svg>,
  ClaudeCode: () => <svg viewBox="0 0 24 24" width="20" height="20"><rect width="24" height="24" rx="4" fill="#1a1a2e"/><path fill="#d97757" d="M6 8l4 4-4 4M11 16h7" strokeWidth="0"/><path stroke="#d97757" strokeWidth="2" strokeLinecap="round" d="M6 8l4 4-4 4M11 16h7" fill="none"/></svg>,
  GoogleAI: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>,
  Antigravity: () => <svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10" fill="#6366f1"/><path fill="white" d="M12 4l2.5 7.5H19l-5.5 4 2 6.5L12 18l-3.5 4 2-6.5L5 12h4.5z"/></svg>,
  HTML5: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>,
  CSS3: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>,
  JavaScript: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>,
  React: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#61DAFB" d="M14.448 13.502c-.162.09-.316.175-.476.256l-.075.038a21.86 21.86 0 0 0 .551 1.107c.986 1.794 2.169 2.929 2.938 2.48.769-.45.885-1.997-.1-3.792a21.86 21.86 0 0 0-.67-1.055l-.023.012c-.385.186-.773.358-1.145.515v.439zm-4.896 0c-.372-.157-.76-.33-1.145-.515l-.023-.012a21.86 21.86 0 0 0-.67 1.055c-.985 1.795-.869 3.342-.1 3.792.769.449 1.952-.686 2.938-2.48a21.86 21.86 0 0 0 .551-1.107l-.075-.038a14.576 14.576 0 0 1-.476-.256v.561zM12 14.43c-.424-.198-.842-.41-1.253-.636-.41-.226-.812-.464-1.201-.712-.018-.387-.027-.78-.027-1.182s.009-.795.027-1.182c.389-.248.79-.486 1.201-.712.41-.226.829-.438 1.253-.636.424.198.843.41 1.253.636.41.226.812.464 1.201.712.018.387.027.78.027 1.182s-.009.795-.027 1.182c-.389.248-.79.486-1.201.712-.41.226-.829.438-1.253.636zm5.616-2.53c.018.387.027.78.027 1.182 0 .401-.009.795-.027 1.182l.023.012c.385.186.773.358 1.145.515h.439c.162-.09.316-.175.476-.256.162-.09.316-.175.476-.256l.075-.038a21.86 21.86 0 0 0-.551-1.107c-.986-1.794-2.169-2.929-2.938-2.48-.769.45-.885 1.997.1 3.792z"/><circle fill="#61DAFB" cx="12" cy="12" r="2.139"/><ellipse fill="none" stroke="#61DAFB" strokeWidth="1.2" cx="12" cy="12" rx="10.5" ry="4.3"/><ellipse fill="none" stroke="#61DAFB" strokeWidth="1.2" cx="12" cy="12" rx="10.5" ry="4.3" transform="rotate(60 12 12)"/><ellipse fill="none" stroke="#61DAFB" strokeWidth="1.2" cx="12" cy="12" rx="10.5" ry="4.3" transform="rotate(120 12 12)"/></svg>,
  NextJS: () => <svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="11" fill="#000"/><path fill="white" d="M8.5 7v10l3-4 3 4V7h-6zm0 0"/></svg>,
  Python: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#3776AB" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.89S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.131V3.37S18.28 0 11.914 0zM8.708 1.95a1.05 1.05 0 1 1 0 2.101 1.05 1.05 0 0 1 0-2.1z"/><path fill="#FFD43B" d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.132S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963H18.566v2.867s.109 3.402-3.35 3.402H9.447s-3.24-.052-3.24 3.131V20.63S5.72 24 12.086 24zm3.206-1.95a1.05 1.05 0 1 1 0-2.101 1.05 1.05 0 0 1 0 2.1z"/></svg>,
  MySQL: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#4479A1" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0C.055 17.32.19 16.31.5 14.59h1.18l1.38 4.18h.01l1.39-4.18h1.15c.28 1.72.44 2.73.5 4.1zM9.26 18.695H8.34c-.07-.48-.12-.97-.18-1.46H6.99l-.27 1.46H5.88c.31-1.72.59-2.96.83-3.72h1.07c.23.76.58 2.01.88 3.72zm5.27 0h-1.1c-.12-.65-.23-1.29-.33-1.93h-1.1c-.1.64-.2 1.28-.32 1.93h-1.07c.3-1.7.63-2.95.97-3.72h1.06c.35.77.7 2.02 1.07 3.72zm5.46 0h-1.36l-.53-1.93h-1.36l-.54 1.93h-1.38c.4-1.7.83-2.95 1.25-3.72h1.58c.42.77.89 2.02 1.34 3.72zm0 0"/></svg>,
  PowerBI: () => <svg viewBox="0 0 24 24" width="20" height="20"><rect x="1" y="4" width="4" height="16" rx="1" fill="#F2C811"/><rect x="7" y="8" width="4" height="12" rx="1" fill="#F2C811"/><rect x="13" y="2" width="4" height="20" rx="1" fill="#F2C811"/><rect x="19" y="6" width="4" height="14" rx="1" fill="#F2C811" opacity=".6"/></svg>,
  Tableau: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#E97627" d="M11 1.5h2v7h7v2h-7v7h-2v-7H4v-2h7z"/><path fill="#5B91C8" d="M4.5 16.5h2v4h4v2h-4v4h-2v-4h-4v-2h4zm14 0h2v4h4v2h-4v4h-2v-4h-4v-2h4z" opacity=".8"/><path fill="#C72037" d="M4.5 0h2v4h4v2h-4v4h-2V6h-4V4h4z" opacity=".8"/><path fill="#59879B" d="M18.5 0h2v4h4v2h-4v4h-2V6h-4V4h4z" opacity=".8"/></svg>,
  Excel: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#217346" d="M21.17 1H8.82C7.26 1 6 2.26 6 3.82V6l8 2-8 2v10.18C6 21.74 7.26 23 8.82 23H21.17C22.74 23 24 21.74 24 20.18V3.82C24 2.26 22.74 1 21.17 1z"/><path fill="#fff" d="M16 12l2.5 4.5h-1.8l-1.7-3.1-1.7 3.1H11.5l2.5-4.5-2.3-4h1.7l1.5 2.8 1.5-2.8H18z"/><path fill="#185C37" d="M6 6l-6 1.5v9L6 18V6z"/><path fill="#fff" d="M2.1 15.5L1 14l1.5-2L1 10l1.1-1.5L4 10.7v2.6z"/></svg>,
  Jupyter: () => <svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="11" fill="#F37726"/><path fill="white" d="M8 8.5C8 6.57 9.57 5 11.5 5S15 6.57 15 8.5s-1.57 3.5-3.5 3.5S8 10.43 8 8.5z" opacity=".9"/><circle cx="12" cy="17" r="2.5" fill="white" opacity=".7"/><circle cx="6" cy="14" r="1.5" fill="white" opacity=".5"/><circle cx="18" cy="14" r="1.5" fill="white" opacity=".5"/></svg>,
  Git: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>,
  GitHub: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="#e6e6e6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  VSCode: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#007ACC" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>,
  Figma: () => <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/><path fill="#FF7262" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/><path fill="#A259FF" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/><path fill="#1ABCFE" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/><path fill="#0ACF83" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/></svg>,
};

const TOOLS = [
  {
    category:"AI & Product Building", color:"#C85CFF",
    items:[
      { name:"ChatGPT",        Icon:Ico.ChatGPT    },
      { name:"Claude",         Icon:Ico.Claude     },
      { name:"Claude Code",    Icon:Ico.ClaudeCode },
      { name:"Google AI Studio",Icon:Ico.GoogleAI  },
      { name:"Antigravity",    Icon:Ico.Antigravity},
    ],
  },
  {
    category:"Frontend Development", color:"#FF8A3D",
    items:[
      { name:"HTML5",      Icon:Ico.HTML5      },
      { name:"CSS3",       Icon:Ico.CSS3       },
      { name:"JavaScript", Icon:Ico.JavaScript },
      { name:"React",      Icon:Ico.React      },
      { name:"Next.js",    Icon:Ico.NextJS     },
    ],
  },
  {
    category:"Data & Analytics", color:"#00E5FF",
    items:[
      { name:"Python",           Icon:Ico.Python   },
      { name:"MySQL",            Icon:Ico.MySQL    },
      { name:"Power BI",         Icon:Ico.PowerBI  },
      { name:"Tableau",          Icon:Ico.Tableau  },
      { name:"Microsoft Excel",  Icon:Ico.Excel    },
      { name:"Jupyter Notebook", Icon:Ico.Jupyter  },
    ],
  },
  {
    category:"Development & Collaboration", color:"#FF5FD2",
    items:[
      { name:"Git",    Icon:Ico.Git    },
      { name:"GitHub", Icon:Ico.GitHub },
      { name:"VS Code",Icon:Ico.VSCode },
      { name:"Figma",  Icon:Ico.Figma  },
    ],
  },
];

/* ── Animation helpers ── */
const fadeUp = (d=0) => ({ initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:0.1}, transition:{duration:0.65,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]} });
const slideL = (d=0) => ({ initial:{opacity:0,x:-36}, whileInView:{opacity:1,x:0}, viewport:{once:true,amount:0.1}, transition:{duration:0.75,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]} });
const slideR = (d=0) => ({ initial:{opacity:0,x:36},  whileInView:{opacity:1,x:0}, viewport:{once:true,amount:0.1}, transition:{duration:0.75,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]} });

/* ── Carousel ── */
function ProfileCarousel() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  }, [idx]);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIdx(i => (i+1) % CAROUSEL_IMAGES.length); }, 4500);
    return () => clearInterval(t);
  }, []);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 50 : -50, opacity:0, scale:0.97 }),
    center: ()         => ({ x: 0, opacity:1, scale:1 }),
    exit:  (d: number) => ({ x: d > 0 ? -50 : 50, opacity:0, scale:0.97 }),
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"}}>
      <div style={{
        position:"relative",width:"58%",aspectRatio:"3/4",
        borderRadius:"22px",overflow:"hidden",
        border:"1px solid rgba(200,92,255,0.22)",
        boxShadow:"0 0 40px rgba(168,85,247,0.18),0 20px 56px rgba(0,0,0,0.5)",
        background:"rgba(10,5,25,0.6)",
      }}>
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div key={idx} custom={dir} variants={variants}
            initial="enter" animate="center" exit="exit"
            transition={{duration:0.5,ease:[0.22,1,0.36,1]}}
            style={{position:"absolute",inset:0}}>
            <Image src={CAROUSEL_IMAGES[idx].src} alt={CAROUSEL_IMAGES[idx].alt}
              fill style={{objectFit:"cover",objectPosition:"center top"}}
              sizes="(max-width:768px) 80vw,25vw" priority={idx===0}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(4,4,10,0.45) 0%,transparent 50%)"}}/>
          </motion.div>
        </AnimatePresence>

        {[{fn:()=>go((idx-1+CAROUSEL_IMAGES.length)%CAROUSEL_IMAGES.length),side:"left"},{fn:()=>go((idx+1)%CAROUSEL_IMAGES.length),side:"right"}].map(({fn,side})=>(
          <button key={side} onClick={fn}
            style={{position:"absolute",top:"50%",[side]:"8px",transform:"translateY(-50%)",width:"28px",height:"28px",borderRadius:"50%",background:"rgba(5,2,18,0.7)",border:"1px solid rgba(255,255,255,0.1)",backdropFilter:"blur(8px)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:5}}>
            {side==="left" ? <ChevronLeft size={14} color="#fff"/> : <ChevronRight size={14} color="#fff"/>}
          </button>
        ))}
      </div>

      <div style={{display:"flex",gap:"7px"}}>
        {CAROUSEL_IMAGES.map((_,i)=>(
          <button key={i} onClick={()=>go(i)}
            style={{width:i===idx?"18px":"6px",height:"6px",borderRadius:"99px",border:"none",cursor:"pointer",background:i===idx?"#C85CFF":"rgba(255,255,255,0.18)",transition:"all 0.3s",padding:0}}/>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" style={{background:"#04040a",padding:"100px 0",position:"relative",zIndex:10}}>
      <div style={{maxWidth:"1500px",margin:"0 auto",padding:"0 24px"}}>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start"}}>

          {/* ── LEFT: content ── */}
          <div>
            <motion.p {...fadeUp(0)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"5px",color:"#C85CFF",marginBottom:"16px",textTransform:"uppercase"}}>ABOUT ME</motion.p>

            <motion.h2 {...slideL(0.08)} style={{fontFamily:"Satoshi,sans-serif",fontWeight:800,color:"#fff",fontSize:"clamp(2rem,3.5vw,3rem)",lineHeight:1.15,marginBottom:"24px"}}>
              Hi, I&apos;m Niranjan Kumar.
            </motion.h2>

            <motion.p {...fadeUp(0.12)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.97rem",lineHeight:1.82,color:"rgba(255,255,255,0.52)",marginBottom:"14px"}}>
              I&apos;m a Marketing Executive at Smartschool Limited with a strong passion for <span style={{color:"#C85CFF",fontWeight:600}}>AI Product Building</span>, Frontend Development, UI/UX Design, Automation, and emerging technologies. I enjoy transforming ideas into real digital products by combining design thinking, AI-powered workflows, and modern web technologies.
            </motion.p>

            <motion.p {...fadeUp(0.16)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.97rem",lineHeight:1.82,color:"rgba(255,255,255,0.52)",marginBottom:"14px"}}>
              My journey goes beyond traditional marketing. I actively build products, experiment with new technologies, and continuously explore better ways to solve real-world problems through software and automation. From designing intuitive user experiences to developing responsive web applications, I enjoy every stage of the product creation process.
            </motion.p>

            <motion.p {...fadeUp(0.2)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.97rem",lineHeight:1.82,color:"rgba(255,255,255,0.52)",marginBottom:"14px"}}>
              I have successfully designed and developed <span style={{color:"#FF8A3D",fontWeight:600}}>live production websites</span>, turning concepts into fully functional digital experiences. I actively leverage tools such as <span style={{color:"rgba(255,255,255,0.75)"}}>ChatGPT, Claude, Claude Code, Google AI Studio, Figma, React, and Next.js</span> to accelerate development.
            </motion.p>

            <motion.p {...fadeUp(0.24)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.97rem",lineHeight:1.82,color:"rgba(255,255,255,0.52)",marginBottom:"32px"}}>
              Currently focused on building <span style={{color:"#C85CFF",fontWeight:600}}>AI-powered solutions</span>, mastering modern frontend technologies, and creating digital experiences that deliver measurable impact.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.28)} style={{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"44px"}}>
              <Link href="/projects" className="btn-primary">View Projects <ArrowRight size={15}/></Link>
              <a href="/resume.pdf" download className="btn-ghost">Download CV <ArrowRight size={15}/></a>
            </motion.div>

            {/* Achievements */}
            <motion.div {...fadeUp(0.32)}>
              <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.62rem",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.22)",marginBottom:"14px"}}>Highlights</p>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",marginBottom:"52px"}}>
                {ACHIEVEMENTS.map((a,i)=>(
                  <motion.div key={a.label}
                    initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}}
                    viewport={{once:true}} transition={{duration:0.5,delay:0.38+i*0.07}}
                    whileHover={{y:-3,transition:{duration:0.18}}}
                    style={{padding:"14px 10px",textAlign:"center",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"12px",backdropFilter:"blur(10px)",cursor:"default"}}>
                    <p style={{fontFamily:"Satoshi,sans-serif",fontWeight:900,fontSize:"1.2rem",background:"linear-gradient(135deg,#FF8A3D,#C85CFF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:"3px"}}>{a.value}</p>
                    <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.62rem",fontWeight:700,color:"rgba(255,255,255,0.65)",marginBottom:"1px"}}>{a.label}</p>
                    <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.55rem",color:"rgba(255,255,255,0.28)"}}>{a.sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Tools & Technologies ── */}
            <motion.div {...fadeUp(0.4)}>
              <p style={{fontFamily:"Satoshi,sans-serif",fontWeight:800,fontSize:"1.4rem",color:"#fff",marginBottom:"6px"}}>Tools I Work With</p>
              <div style={{width:"40px",height:"3px",background:"linear-gradient(90deg,#FF8A3D,#C85CFF)",borderRadius:"2px",marginBottom:"28px"}}/>

              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
                {TOOLS.map((group,gi)=>(
                  <motion.div key={group.category}
                    initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}
                    viewport={{once:true}} transition={{duration:0.55,delay:0.45+gi*0.09}}>
                    <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.6rem",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:group.color,marginBottom:"12px",opacity:0.9}}>{group.category}</p>
                    <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
                      {group.items.map(({name,Icon})=>(
                        <motion.div key={name}
                          whileHover={{x:3,transition:{duration:0.15}}}
                          style={{
                            display:"flex",alignItems:"center",gap:"10px",
                            padding:"9px 12px",borderRadius:"10px",
                            background:"rgba(255,255,255,0.03)",
                            border:"1px solid rgba(255,255,255,0.07)",
                            cursor:"default",transition:"border-color 0.2s",
                          }}
                          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=`${group.color}35`;(e.currentTarget as HTMLElement).style.background=`${group.color}08`;}}
                          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.07)";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)";}}>
                          <span style={{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",width:"24px",height:"24px"}}><Icon/></span>
                          <span style={{fontFamily:"Inter,sans-serif",fontSize:"0.75rem",fontWeight:500,color:"rgba(255,255,255,0.72)"}}>{name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Quote (end) ── */}
            <motion.div {...fadeUp(0.5)} style={{
              marginTop:"48px",
              position:"relative",padding:"28px 28px 24px 36px",
              background:"linear-gradient(135deg,rgba(200,92,255,0.06) 0%,rgba(255,138,61,0.04) 100%)",
              border:"1px solid rgba(200,92,255,0.16)",
              borderLeft:"3px solid #C85CFF",
              borderRadius:"0 16px 16px 0",
            }}>
              <span style={{position:"absolute",top:"-4px",left:"14px",fontSize:"3.5rem",lineHeight:1,color:"#C85CFF",opacity:0.2,fontFamily:"Georgia,serif",pointerEvents:"none"}}>&ldquo;</span>
              <p style={{fontFamily:"Satoshi,sans-serif",fontSize:"1rem",fontWeight:600,lineHeight:1.75,color:"rgba(255,255,255,0.75)",margin:0,fontStyle:"italic"}}>
                Technology evolves every day, and so do I. I enjoy turning ideas into real products, building modern web experiences, and continuously learning new technologies that help solve real-world problems.
              </p>
              <span style={{display:"block",marginTop:"10px",fontSize:"0.7rem",color:"#FF8A3D",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase"}}>— Niranjan Kumar</span>
            </motion.div>
          </div>

          {/* ── RIGHT: sticky carousel ── */}
          <motion.div {...slideR(0.12)} style={{position:"sticky",top:"88px"}}>
            <ProfileCarousel/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
