import "../styles/Partner.css";
const Partner = (props) => {
  return (
    <div className="partner-list">
      {props.PartnerList.map((item, index) => {
        return (
          <div className="kartu-partner" key={index}>
            <img src={item.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Partner;
