import { CheckIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { LocaleContext } from "../../contexts/locale";

const features = [
  {
    name: "Invite team members",
    description:
      "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.",
  },
  {
    name: "List view",
    description:
      "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.",
  },
  {
    name: "Keyboard shortcuts",
    description:
      "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.",
  },
  {
    name: "Calendars",
    description:
      "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.",
  },
  {
    name: "Notifications",
    description:
      "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.",
  },
  {
    name: "Boards",
    description:
      "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.",
  },
  {
    name: "Reporting",
    description:
      "Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.",
  },
  {
    name: "Mobile app",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
];

function FeaturesSection() {
  const { content } = useContext(LocaleContext);

  const { subtitle, title, description, items } = content.pages.index.features;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              {subtitle}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {description}
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {items.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
