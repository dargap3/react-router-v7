import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getClient } from "@/fake/fake-data";
import { NoContactSelected } from "./no-contact-selected";
import { ContactInfoSkeleton } from "./contact-info-skeleton";
import { ContactInfo } from "./contact-info";

export const ContactDetails = () => {
  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ["client", clientId],
    queryFn: () => getClient(clientId ?? ""),
    enabled: clientId !== undefined,
  });

  if (!clientId) return <NoContactSelected />;

  if (isLoading && !client) return <ContactInfoSkeleton />;

  if (client) return <ContactInfo client={client} />;

  return <div>Client not found</div>;
};
