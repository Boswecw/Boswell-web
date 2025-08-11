import PropTypes from 'prop-types';
import { memo } from 'react';

const TestimonialCard = ({ quote, author, role, avatar }) => (
  <figure className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 h-full">
    <div className="flex items-start gap-4">
      {avatar && (
        <img
          src={avatar}
          alt={`Portrait of ${author}`}
          className="w-12 h-12 rounded-full object-cover border border-gray-700"
          loading="lazy"
          decoding="async"
        />
      )}
      <blockquote className="text-gray-200">
        <p className="italic leading-relaxed">“{quote}”</p>
      </blockquote>
    </div>
    <figcaption className="mt-4 text-sm text-gray-400">
      <span className="font-medium text-white">{author}</span>
      {role ? <span className="text-gray-500"> · {role}</span> : null}
    </figcaption>
  </figure>
);

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string,
  avatar: PropTypes.string,
};

const TestimonialsSection = ({ title = 'What clients say', subtitle, items = [] }) => {
  if (!items.length) return null;

  return (
    <section aria-labelledby="testimonials-heading" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-white">
            {title}
          </h2>
          {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        </header>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((t, i) => (
            <li key={t.id ?? i} className="h-full">
              <TestimonialCard {...t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

TestimonialsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      role: PropTypes.string,
      avatar: PropTypes.string,
    })
  ),
};

export default memo(TestimonialsSection);
