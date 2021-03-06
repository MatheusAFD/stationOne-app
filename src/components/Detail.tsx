export function Detail(props: { class?: string }) {
  return (
    <div className={`display flex  gap-x-3 ${props.class}`}>
      <span className="detail"></span>
      <span className="detail"></span>
      <span className="detail"></span>
    </div>
  );
}
