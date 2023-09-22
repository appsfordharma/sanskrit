export const Card = ({
  arrowUrl,
  url,
  backgroundUrl,
  title,
  subTitle,
  description,
}) => (
  <article className="relative w-full max-w-lg transform cursor-pointer rounded-md shadow-2xl duration-500 hover:-translate-y-2">
    <div className="absolute top-0 right-0 flex h-10 w-10 bg-blue-600 text-gray-100">
      <span className="mx-auto my-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-5 w-5" alt="someting" src={arrowUrl} />
      </span>
    </div>
    <div
      className="min-h-96 mt-10 overflow-hidden bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mx-auto p-5" src={url} alt="" />
    </div>
    <div className="mt-2 mb-10 p-8">
      <p className="text-xl text-gray-500">{subTitle}</p>
      <h2 className="mt-2 text-3xl">{title}</h2>
      {typeof description !== "undefined" ? (
        <p className="text-xbase mt-5 leading-relaxed text-gray-400">
          {description}
        </p>
      ) : null}
    </div>
  </article>
);

export default Card;
