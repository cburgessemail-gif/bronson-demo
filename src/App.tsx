import React, { useState } from 'react';
import { ShoppingCart, Sprout, Users, Shield, Handshake, MapPin } from 'lucide-react';

const bg='https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop';

const cards=[
{title:'Guest',icon:MapPin,text:'Enter the story, meaning, and mission of the land.'},
{title:'Customer',icon:ShoppingCart,text:'Shop produce, recipes, and marketplace access.'},
{title:'Grower',icon:Sprout,text:'Production planning, selling pathways, support.'},
{title:'Youth Worker',icon:Users,text:'Skills, confidence, and future direction.'},
{title:'Supervisor',icon:Shield,text:'Mentoring, safety, and program structure.'},
{title:'Partner',icon:Handshake,text:'Invest in food, land, and community.'},
];

export default function App(){
const [view,setView]=useState('home');
const selected=cards.find(c=>c.title===view);
return <div className='min-h-screen text-white bg-cover bg-center' style={{backgroundImage:`linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url(${bg})`}}>
<div className='max-w-7xl mx-auto p-8'>
{view==='home'?<>
<p className='text-xl mb-3'>Welcome to</p>
<h1 className='text-6xl font-bold mb-6'>Bronson Family Farm</h1>
<p className='text-2xl max-w-4xl mb-4'>A regenerative ecosystem responding to rising food costs, unhealthy substitutes, community disconnection, and the need for real opportunity.</p>
<p className='text-xl max-w-4xl mb-10'>The land • marketplace • grower network • youth workforce • partnership vision</p>
<div className='flex gap-4 mb-12'>
<a href='https://grownby.com/farms/bronson-family-farm/shop' target='_blank' className='bg-green-600 px-6 py-3 rounded-2xl font-semibold'>Visit Marketplace</a>
<button onClick={()=>setView('Guest')} className='bg-white/20 px-6 py-3 rounded-2xl'>Enter Live Demo</button>
</div>
<div className='grid md:grid-cols-3 gap-5'>
{cards.map(c=>{const I=c.icon;return <button key={c.title} onClick={()=>setView(c.title)} className='text-left bg-white/10 hover:bg-white/20 rounded-3xl p-6 backdrop-blur'>
<I className='mb-3'/><div className='text-2xl font-bold'>{c.title}</div><div className='mt-2 text-white/90'>{c.text}</div></button>})}
</div>
</>:<>
<button onClick={()=>setView('home')} className='mb-8 bg-white/15 px-4 py-2 rounded-xl'>← Back to Entrance</button>
<h2 className='text-5xl font-bold mb-4'>{selected?.title}</h2>
<p className='text-2xl max-w-3xl mb-8'>{selected?.text}</p>
<div className='grid md:grid-cols-2 gap-6'>
<div className='bg-white/10 rounded-3xl p-6 backdrop-blur'>
<h3 className='text-2xl font-semibold mb-3'>Your Pathway</h3>
<p>{selected?.title==='Customer'?'Buy fresh food, access recipes, return weekly, support local growers.':selected?.title==='Grower'?'Crop planning, inventory, market access, shared ecosystem tools.':selected?.title==='Youth Worker'?'Training, teamwork, attendance, confidence, leadership.':'Discover resources, meaning, and future possibilities.'}</p>
</div>
<div className='bg-white/10 rounded-3xl p-6 backdrop-blur'>
<h3 className='text-2xl font-semibold mb-3'>Next Move</h3>
{selected?.title==='Customer'?<a href='https://grownby.com/farms/bronson-family-farm/shop' target='_blank' className='underline'>Open Marketplace</a>:<button onClick={()=>setView('home')} className='underline'>Return to Ecosystem</button>}
</div>
</div>
</>}
</div></div>
}
