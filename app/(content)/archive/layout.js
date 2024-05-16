// Layout file in the archive folder which start with @ will recieve two props
// children and one prop per parallal page the prop name must be same file name after the @ symbal.

const ArchiveLayout = ({ latest, archive }) => {
  return (
    <div>
      <h1>Archive News</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
