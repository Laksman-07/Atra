import ServicesLayout from "../ServicesLayout";

export default function LocationPage({ params }: { params: { location: string } }) {
  const { location } = params;

  return <ServicesLayout location={location.toUpperCase()} />;
}


