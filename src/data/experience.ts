import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Independent IAM Consultant & Architect (Training, Advisory, and Implementation)",
    company: "Focus: Enterprise Identity",
    period: "2023 - Present",
    description: "Intensive focus on modern IAM methodologies, Zero Trust frameworks, and Entra ID ecosystems. Leveraging 30 years of infrastructure expertise to solve complex identity governance and access security challenges.",
    technologies: ["Entra ID", "Identity Governance", "Conditional Access", "PIM", "B2B/B2C"],
    type: 'IAM'
  },
  {
    id: "2",
    title: "EUC Technical Specialist & Identity Architect",
    company: "Vitality Health & Life Insurance - Full-time",
    period: "2019 - 2023",
    description: "Managed a medium-scale Microsoft environment. Led an Azure / M365 tenant migration and Active Directory consolidation. Designed and built a secure hybrid identity synchronization using Entra Connect.",
    technologies: ["Active Directory", "Entra ID", "Azure AD Connect", "Azure", "Exchange Online", "M365", "PowerShell"],
    type: 'Hybrid'
  },
  {
    id: "3",
    title: "Active Directory Specialist",
    company: "DXC - Contract",
    period: "2018 - 2019",
    description: "Designed, documented and implemented a large scale Active Directory environment for a major client. Focused on secure domain design, Group Policy management, and AD DS hardening best practices.",
    technologies: ["AD DS", "Group Policy", "Windows Server", "PowerShell"],
    type: 'Microsoft Legacy'
  },
  {
    id: "4",
    title: "Infrastructure Specialist",
    company: "Cobham - Contract",
    period: "2017 - 2018",
    description: "Designed, documented and implemented a hybrid infrastructure solution. Ensuring secure integration between on-premises Active Directory and cloud services. Focused on identity synchronization, access management, and secure hybrid architecture. Further designed and documented a VMware AirWatch MDM environment for secure mobile device management.",
    technologies: ["Azure AD", "Azure AD Connect", "AD DS", "Group Policy", "VMware AirWatch", "Windows Server", "PowerShell", "Office 365"],
    type: 'Hybrid'
  },
  {
    id: "5",
    title: "Active Directory Consultant",
    company: "Microsoft - Contract",
    period: "2016 - 2017",
    description: "Designed, documented and implemented a large scale Active Directory environment for a major client. Focused on secure domain design, Group Policy management, and AD DS hardening best practices, RBAC implementation. The customer was a cloud host provider, so the design had to accommodate multi-tenancy and secure delegation. It included two separate forests with a one-way trust, and a complex OU structure to support delegated administration and RBAC.",
    technologies: ["AD DS", "Group Policy", "Windows Server", "PowerShell", "RBAC", "Multi-tenancy", "Trusts"],
    type: 'Hybrid'
  },
  {
    id: "6",
    title: "Various Directory Services and Messaging Consultant",
    company: "Various Clients - Contract and Full-time",
    period: "1993 - 2016",
    description: "Over 24 years of experience designing, implementing, migrating, and managing directory services and messaging systems. This includes extensive work with Active Directory, Exchange Server, and various other Microsoft technologies across multiple industries. The work often involved complex environments with multiple domains, forests, and hybrid configurations.",
    technologies: ["Design", "AD DS", "Group Policy", "Windows Server", "PowerShell", "RBAC", "Multi-tenancy", "Trusts", "Exchange Server"],
    type: 'Microsoft Legacy & Hybrid'
  }
];
