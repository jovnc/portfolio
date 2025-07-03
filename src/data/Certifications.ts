export interface CertificationItem {
  title: string;
  issuer: string;
  startDate: string;
  endDate: string;
  image: string;
  credentialUrl: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    startDate: "2024-02-29",
    endDate: "2027-02-28",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    credentialUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/f0790ff0518b4962961cf9dc8e2e8512",
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    startDate: "2023-08-28",
    endDate: "2026-08-28",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    credentialUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/YM8MHKLK7N1EQSST",
  },
  {
    title: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    startDate: "2024-12-28",
    endDate: "2026-12-28",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    credentialUrl:
      "https://www.credly.com/earner/earned/share/184f6ef4-7ff6-444d-9eb7-4bfea64e6b14",
  },
];
