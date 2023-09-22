const Card = ({ title, description, url }) => (
  <article className="mx-auto flex max-w-lg flex-wrap rounded-xl shadow-sm hover:shadow-lg md:max-h-64 md:flex-nowrap">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      className="h-auto w-full rounded-t-xl md:w-60 md:max-w-xs md:rounded-none md:rounded-l-xl"
      src={
        url ||
        "https://weandthecolor.com/wp-content/uploads/2012/03/A-Way-Out-Illustration-by-Matheus-Lopes-4563464.jpg"
      }
      alt=""
    />
    <div className="my-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      <p className="mt-2 text-base text-gray-400">{description}</p>
    </div>
  </article>
);

export default Card;
