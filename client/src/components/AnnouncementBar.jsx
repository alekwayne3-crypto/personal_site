export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      🎉 20% OFF FIRST TIME CUSTOMERS — <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Get Your Quote Today</a>
    </div>
  )
}
