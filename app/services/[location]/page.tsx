import ServicesLayout from "../ServicesLayout";

export default function LocationPage({
  params,
}: {
  params: { location: string };
}) {
  return <ServicesLayout location={params.location} />;
}
