import { formatDate } from "./formatters";

export function Item({
  title,
  subtitle,
  location,
  startDate,
  endDate,
  startDate2,
  endDate2,
}) {
  return (
    <>
      <div class="item">
        <ItemHeader title={title} subtitle={subtitle}/>
        <ItemDetails
          location={location}
          startDate={startDate}
          endDate={endDate}
          startDate2={startDate2}
          endDate2={endDate2}
        />
        <div class="clearfix"></div>
      </div>
    </>
  );
}
function ItemHeader({ title, subtitle}) {
  return (
    <div class="item-header">
      {title ? <div class="item-header-title">{title}</div> : null}
      {subtitle ? <div class="item-header-subtitle">{subtitle}</div> : null}
    </div>
  );
}
function ItemDetails({ location, startDate, endDate, startDate2, endDate2 }) {
  return (
    <div class="item-details">
      {location ? <div class="item-details-title">{location}</div> : null}
      {startDate ? (
        endDate ? (
          <div class="date">
            {formatDate(startDate)} — {formatDate(endDate)}
            {startDate2
              ? endDate2
                ? formatDate(startDate2) + "-" + formatDate(endDate2)
                : formatDate(startDate2) + "— Present"
              : null}
          </div>
        ) : (
          <div class="date">{formatDate(startDate)} — Present</div>
        )
      ) : null}
    </div>
  );
}
