const Card = ({ title, description, url }) => (
  <article className="mx-auto w-full max-w-md transform cursor-pointer rounded-xl shadow-sm duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="max-h-140 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="h-auto w-full rounded-t-lg" src={url} alt="" />
    </div>
    <div className="my-auto p-7 pb-12">
      <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
      <p className="mt-5 text-xl font-light leading-relaxed text-gray-400">
        {description}
      </p>
    </div>
  </article>
);

export default Card;
