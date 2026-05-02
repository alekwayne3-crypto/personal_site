export default function ServiceAreas() {
  return (
    <div className="cta-banner">
      <span className="pill pill-white-yellow" style={{ marginBottom: 20, display: 'inline-block' }}>Service Areas</span>
      <h2 className="cta-banner-title">Proudly Serving the Greater Tulsa Area</h2>
      <p className="cta-banner-sub">
        Clean Bee provides professional residential cleaning services across Tulsa and all surrounding communities.
      </p>
      <div className="service-areas-grid">
        {['Broken Arrow','Bixby','Jenks','Owasso','Sand Springs','Sapulpa','Glenpool','Catoosa','Coweta','Claremore','South Tulsa'].map(area => (
          <span key={area} className="service-area-tag">{area}</span>
        ))}
      </div>
    </div>
  )
}
