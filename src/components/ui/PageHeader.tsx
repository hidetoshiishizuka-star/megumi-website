export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-forest-light py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
