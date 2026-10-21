import { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
  {
    id: "12",
    title: "Shadow IT and Unsanctioned Apps: The IAM Blind Spot That's Costing You More Than You Think",
    slug: "shadow-it-and-unsanctioned-apps-the-iam-blind-spot-thats-costing-you-more-than-you-think",
    date: "October 11, 2026",
    category: "Governance & Administration",
    excerpt: "At the centre of this evolution sits SailPoint Identity Security Cloud (ISC), a platform that has redefined how organisations approach identity governance and administration (IGA).",
    content: `
# Shadow IT and Unsanctioned Apps: The IAM Blind Spot That's Costing You More Than You Think
By an IAM consultant who's been governing access since before "cloud" meant anything.

---

## Introduction

Shadow IT has a reputation problem. Most security and IAM professionals still treat it as a governance failure — a sign that someone, somewhere, broke the rules. But the data tells a different story. Shadow IT is rarely malicious; it is almost always a symptom of a gap between what the business needs and what sanctioned IT can deliver at the speed the business demands. The real IAM challenge is that this gap creates identities, data flows, and access paths that your governance framework was never designed to see, let alone control.

This article explores shadow IT and unsanctioned apps from an IAM perspective. We'll look at what the industry data actually says about the scale and cost of the problem, why traditional IAM controls fail to catch it, and what a more realistic — and more effective — approach looks like. The core argument is simple: you cannot govern what you cannot see, and the fastest way to make shadow IT visible is not to ban it but to compete with it, then bring its identities and data flows into a unified control plane.

---

## What We Mean by Shadow IT and Unsanctioned Apps

Shadow IT is any technology, service, or application used within an organization that has not been explicitly approved, provisioned, or managed by the central IT or security function. In practice, this spans an enormous range:

- **SaaS subscriptions** purchased by individual teams or departments on personal or departmental credit cards — project management tools, note-taking apps, file-sharing services, marketing automation platforms.

- **Cloud infrastructure** spun up outside the corporate account structure — an AWS or Azure environment created by a developer for a proof of concept that quietly becomes production.

- **AI tools and models** consumer-grade generative AI services used to summarize documents, draft content, or analyze data, often with sensitive information pasted directly into a third-party interface.

- **No-code and low-code platforms** where business users build their own workflows, connectors, and data pipelines.

- **Developer tooling and integrations** API keys generated outside your credential management system, scripts running with personal tokens, OAuth apps authorized by employees without review.

From an IAM standpoint, each of these creates three distinct problems. First, identities — service accounts, API keys, OAuth grants, and user accounts — that exist outside your directory and your governance processes. Second, access paths — connections between your sanctioned systems and unsanctioned ones — that you have not authorized and cannot monitor. Third, data flows — sensitive data moving into environments with weaker controls, unknown retention policies, and unclear jurisdictional boundaries.

The unsanctioned app is the delivery mechanism; the shadow identity and the shadow data flow are the IAM consequences. That distinction matters because most organizations focus on detecting the app and stop there, without addressing the identity sprawl and data exposure the app creates.

---

## The Scale of the Problem: What the Data Says

It is tempting to treat shadow IT as a fringe issue. The numbers do not support that view.

A widely cited Gartner finding, referenced in CIO.com's analysis of enterprise shadow IT, puts shadow IT at 30 to 40 percent of IT spending in large enterprises. Everest Group's research, cited in the same piece, finds it comprises 50 percent or more. The author of that analysis goes further, arguing that even these figures understate the ecosystem because they measure spending that can be identified, while a significant portion of shadow IT — personal subscriptions, free-tier services, embedded tooling — never surfaces in any financial system at all.

That was written in 2017, and the trajectory since then has only accelerated. The barriers to procuring technology have collapsed. A team lead can sign up for a SaaS platform in minutes with a corporate card and no procurement review. A developer can provision cloud infrastructure with a personal account and a credit card. An employee can open a consumer generative AI tool and start pasting in documents without any interaction with IT whatsoever.

The IBM Cost of a Data Breach Report 2024, summarized in IBM's analysis of shadow data and shadow AI, provides the most current evidence of what this means for security outcomes. The findings are stark:

- **35 percent of breaches** involved data stored in unmanaged data sources — what IBM calls "shadow data."

- Breaches involving shadow data **took 26.2 percent longer to identify and 20.2 percent longer to contain**, averaging 291 days.

- The average cost of a breach involving shadow data was **USD 5.27 million**.

- **40 percent of breaches** involved data stored across multiple types of environments, with public cloud environments incurring the highest average breach cost at **USD 5.17 million**.

- Attackers were able to access more sensitive data, leading to a **26.5 percent rise in IP theft**, with lost IP costing **USD 173 per record** in 2024, up from USD 156 in 2023.

Two details deserve particular attention from an IAM perspective. The first is the **291-day figure**. That is not primarily a detection-technology problem; it is an identity and access visibility problem. If you cannot enumerate the identities that have access to a data store, and cannot trace which credentials were used to reach it, you cannot scope an investigation. The breach persists because the access paths are invisible.

The second is IBM's finding on AI. The report notes that a recent executive survey found **only 24 percent of new generative AI initiatives include a security component**. Combine that with the shadow data statistic and you have a compounding risk: sensitive data flowing into unsanctioned AI models, through identities that are not governed, with no security review at any stage of the pipeline.

The picture that emerges is not one of isolated policy violations. It is one of a parallel technology estate — with its own identities, its own data flows, and its own (generally weaker) security posture — running alongside the sanctioned estate, largely invisible to the teams responsible for governing access.

---

## Why Traditional IAM Controls Miss Shadow IT

Most IAM programs are built around a set of assumptions that shadow IT violates directly. Understanding those assumptions is the first step toward closing the gap.

**Assumption one: identities are provisioned through the directory**. Your joiner-mover-leaver process, your role-based access control, your access reviews — all of these operate on identities that exist in your identity provider. Shadow IT creates identities outside that boundary: local accounts in SaaS tools, API keys generated in developer consoles, OAuth grants issued to third-party applications, service accounts created by business teams in their own cloud subscriptions. These identities never appear in an access review because they were never in scope.

**Assumption two: access flows through sanctioned channels**. Your conditional access policies, your session controls, your data loss prevention rules — these are enforced at the gateway, the identity provider, or the sanctioned application. When an employee authorizes a third-party OAuth app to read their mailbox, or when a team builds a connector between a sanctioned CRM and an unsanctioned analytics platform using a personal API token, the traffic does not traverse your controlled channels. It goes directly from the sanctioned system's API to the unsanctioned one, authenticated by a credential you did not issue and cannot revoke through your normal processes.

**Assumption three: you know where your data lives**. Data classification, retention policies, and protection controls all depend on knowing which data stores exist and who can reach them. IBM's finding that 35 percent of breaches involve unmanaged data sources is a direct measure of how badly this assumption fails in practice. The data is in a team's SaaS tool, a developer's cloud storage bucket, a consumer AI service's training pipeline — none of which appear in your data inventory.

**Assumption four: procurement is the control point**. Many organizations still treat the procurement process as the primary gate for technology adoption. But the entire economics of SaaS and cloud have bypassed procurement. The Gartner and Everest Group figures on shadow IT spending are, in effect, a measure of how much technology enters the organization without passing through that gate.

The consequence is that IAM teams are governing a shrinking fraction of the actual identity and access estate. The sanctioned estate is well-governed; the unsanctioned estate is not governed at all. And the unsanctioned estate is growing faster than the sanctioned one, because it has no friction.

---

## The IAM Risks That Shadow IT Creates

It is worth being precise about the specific risks, because "shadow IT is risky" is too vague to drive remediation. From an identity and access perspective, the risks fall into five categories.

### 1. Identity Sprawl and Orphaned Credentials

Every unsanctioned SaaS subscription, cloud account, and API integration creates identities. When the employee who created them leaves, or moves to a different team, those identities frequently persist. There is no leaver process for an account that was never in the directory. The result is a growing population of credentials — API keys, service accounts, OAuth tokens — with no clear owner, no rotation schedule, and no revocation path.

This is the IAM equivalent of technical debt, and like technical debt it compounds. Each orphaned credential is a potential entry point that bypasses every control you have built around your sanctioned identity lifecycle.

### 2. Unmonitored Access Paths Between Sanctioned and Unsanctioned Systems

The most dangerous shadow IT is not the standalone tool; it is the integration. When a team connects a sanctioned system to an unsanctioned one — exporting CRM data to a third-party analytics platform, syncing HR records to a project management tool, feeding financial data into a consumer AI model — they create a persistent access path authenticated by a credential that sits outside your governance.

These paths are difficult to discover because they are legitimate API calls from a legitimate system. They look like normal traffic. The only anomaly is the destination, and if you are not monitoring egress to unsanctioned destinations, you will not see them.

### 3. Data Exposure Through Unsanctioned AI

IBM's analysis is explicit about the AI dimension: unsanctioned data, models, and AI use "can be invisible to the IT and security teams, which can result in impactful incidents down the line." The specific IAM risk is that AI tools require data to function. Employees paste documents, upload datasets, and connect data sources to consumer AI services that may retain, train on, or expose that data.

The healthcare example in IBM's report — chest X-ray images sent to a cloud model unencrypted, intercepted by an attacker, and used for extortion — is a data protection failure, but its root cause is an access governance failure. No one authorized that data flow, no one classified the data before it left the controlled environment, and no one had visibility into the identity that moved it.

### 4. Blast Radius Expansion Through Credential Reuse

Shadow IT frequently involves credential reuse — the same password across personal and corporate accounts, the same API key embedded in multiple scripts, the same OAuth grant shared across a team. When any one of those services is breached, the reused credential provides a foothold into the others.

This is a well-understood risk in the consumer context, but it is underappreciated in the enterprise context because the reused credentials are often not corporate credentials at all. They are personal credentials that happen to have access to corporate systems through an unsanctioned integration. Revoking them requires knowing they exist.

### 5. Compliance and Regulatory Exposure

IBM notes that breaches involving shadow data highlight "data governance gaps, data privacy issues, and impending regulatory impact." From an IAM perspective, the compliance problem is that access to regulated data cannot be demonstrated to be authorized, least-privilege, or reviewed. If a regulator asks who had access to a particular dataset, and that dataset was copied into an unsanctioned tool, the honest answer is that you do not know.

The 291-day average time to contain a shadow-data breach is, in part, a measure of how long it takes to reconstruct an access picture that should have been available from the start.

---

## The Root Cause: Speed and Alignment, Not Malice

The CIO.com analysis makes an argument that IAM teams would do well to internalize: shadow IT exists because enterprise IT does not serve business needs well enough. The IT group is "too slow or not responsive for the appetite of business users, too costly and doesn't align well with the business needs." Business users build their own capabilities because the sanctioned path cannot deliver at the speed the business requires.

This framing matters because it changes the remediation strategy. If shadow IT were a compliance problem, the answer would be tighter policy and better detection. If shadow IT is a service-delivery problem, the answer is to improve the sanctioned service so that it out-competes the unsanctioned alternative. The CIO.com piece recommends exactly that: establish DevOps cross-functional teams aligned to business needs, with a cloud stack, a SaaS stack, and an automated test environment, delivering functionality at the speed of business. The goal is to "out-compete shadow IT for speed and alignment."

For IAM, the implication is that friction is not a control. Making it harder to adopt unsanctioned technology does not reduce shadow IT; it just pushes it further out of sight. The organizations that have made progress are the ones that reduced the friction of the sanctioned path — faster access provisioning, self-service for low-risk tools, pre-approved catalogs of SaaS and AI services — while simultaneously improving visibility into what is actually being used.

---

## A Realistic IAM Approach to Shadow IT

No organization will eliminate shadow IT entirely. The goal is to shrink the ungoverned portion of the estate and bring as much of it as possible under IAM control. That requires a different approach at each stage.

### Step 1: Discover — You Cannot Govern What You Cannot See

Discovery is the foundation, and it has to operate on multiple planes simultaneously:

- **Financial discovery**: Analyze expense reports, corporate card transactions, and procurement records for SaaS and cloud spending that did not go through IT. This catches paid shadow IT but misses free-tier and personal-account usage.

- **Network and egress discovery**: Monitor outbound traffic to unsanctioned SaaS and cloud destinations. This catches usage regardless of payment method but requires the traffic to traverse a monitored point.

- **Identity and OAuth discovery**: Audit OAuth grants, API keys, and service accounts in your sanctioned systems for connections to unsanctioned applications. This is the most IAM-native discovery method and frequently the most revealing, because it surfaces the integration paths that carry data.

- **Data discovery**: Use data security posture management (DSPM) — which IBM explicitly recommends — to identify sensitive data across cloud environments and services, including stores you did not know existed.

The output of discovery should be an inventory: which unsanctioned apps are in use, by whom, with what data, and through which identities. That inventory is the input to every subsequent step.

### Step 2: Classify and Prioritize by Data Sensitivity and Access Breadth

Not all shadow IT is equal. A team using an unsanctioned note-taking app for meeting minutes is a different risk from a team feeding customer records into a consumer AI model. Prioritize based on two dimensions:

- **Data sensitivity**: What data does the unsanctioned app touch? Does it receive regulated, confidential, or IP data?

- **Access breadth**: How many identities and systems does it connect to? Does it hold persistent credentials with broad scope?

The highest-priority targets are the ones that combine both: broad access to sensitive data through ungoverned identities. These are the shadow data flows that IBM's report shows drive the highest breach costs and the longest containment times.

### Step 3: Bring Identities Under Governance Where Possible

For unsanctioned apps that the business genuinely needs, the goal is to bring their identities into your governance framework rather than to shut them down. Practically, this means:

- **Migrate to sanctioned equivalents** where they exist, and provision access through your normal identity lifecycle.

- **Integrate unsanctioned-but-necessary apps into your identity provider** via SSO and SCIM provisioning, so that joiner-mover-leaver processes apply and access reviews cover them.

- **Replace personal credentials with governed service identities** for integrations — managed identities, workload identities with short-lived credentials, or API keys stored in a secrets manager with rotation policies.

- **Revoke orphaned credentials** identified during discovery, and establish a process for identifying them on an ongoing basis.

The principle is to convert shadow identities into governed identities wherever the business need is legitimate. Shutting down the app without addressing the need just moves the problem.

### Step 4: Control the Data Flows You Cannot Eliminate

Some unsanctioned usage will persist. For those cases, the control objective shifts from identity governance to data flow control:

- **Egress filtering and CASB**: Block or alert on data flows to unsanctioned destinations, particularly for sensitive data classifications.

- **DLP at the sanctioned boundary**: Prevent sensitive data from leaving sanctioned systems in the first place, so that it cannot reach unsanctioned tools.

- **Encryption and classification at source**: IBM's recommendation to "identify, classify, encrypt" applies here — data that is classified and encrypted before it leaves the controlled environment is less valuable to an attacker and easier to trace.

- **AI-specific controls**: Extend posture management to AI models, as IBM recommends, to gain visibility into unsanctioned model use, data leakage, and malicious drift.

### Step 5: Reduce the Friction That Drives Shadow IT

This is the step most IAM programs skip, and it is the one that determines whether the other steps succeed. If the sanctioned path remains slow and misaligned with business needs, discovery and remediation become a permanent game of whack-a-mole.

The CIO.com recommendation — DevOps teams aligned to business needs, delivering at the speed of business — is the service-delivery answer. The IAM answer is to make the sanctioned path fast for low-risk access: self-service catalogs, automated provisioning, pre-approved SaaS and AI tools with security review baked in. The goal is that the easiest way to get the capability is also the governed way.

---

## Where IAM Fits in the Broader Response

IBM's recommendations — encrypt, adopt DSPM, rethink data protection for the AI era, evolve with regulatory demands — are primarily data-security recommendations. They are necessary, but they are not sufficient without IAM. DSPM tells you where sensitive data is; IAM tells you who can reach it and through which identities. Encryption protects data at rest and in transit; IAM controls who can decrypt it and under what conditions.

The integration point is the identity-to-data access path. Every shadow data flow is moved by an identity. Every breach involving shadow data involved a credential that had access it should not have had, or that was not revoked when it should have been. The IAM program's contribution to shadow IT risk reduction is to make those identities visible, governed, and revocable — and to make the sanctioned path fast enough that the business does not need to create them in the first place.

The 24 percent figure from IBM's executive survey — only 24 percent of new generative AI initiatives include a security component — is the clearest signal of where the next wave of shadow IT will come from. AI initiatives are being launched at speed, often outside central IT, with data flowing into models that no one has reviewed. The IAM controls for that wave — governed service identities for AI workloads, classification and access control on training data, visibility into which identities can reach which models — need to be in place before the initiatives scale, not after.

---

## Conclusion: Compete, Then Govern

The industry data paints a consistent picture. Shadow IT is large — 30 to 40 percent of IT spending by Gartner's estimate, more by others. It is costly when it goes wrong — USD 5.27 million average breach cost where shadow data is involved, 291 days average containment time. And it is growing, driven by the same SaaS, cloud, and AI economics that make it easy to adopt and hard to see.

The IAM response cannot be to tighten policy and hope for compliance. Shadow IT is a service-delivery problem, and the organizations that reduce it most effectively are the ones that out-compete it: fast, aligned, governed access to the tools the business needs, with discovery and governance extended to the tools the business adopts anyway.

The practical sequence is discover, classify, govern what you can, control the data flows you cannot eliminate, and reduce the friction that drives the problem in the first place. Each step depends on the one before it, and the first step — discovery — is where most IAM programs are weakest, because it requires looking outside the directory for identities and access paths that were never designed to appear there.

The organizations that get this right will not eliminate shadow IT. They will shrink the ungoverned portion of their estate, bring the highest-risk identities and data flows under control, and build the visibility needed to respond when — not if — an unsanctioned app becomes the entry point for an incident. That is a realistic goal, and it is a far better use of IAM effort than a policy the business cannot follow and a detection capability that only sees what it already knows to look for.

`
  },
  {
    id: "11",
    title: "SailPoint Identity Security Cloud: Its Place in the Modern IAM Architecture",
    slug: "sailpoint-identity-security-cloud-its-place-in-the-modern-iam-architecture",
    date: "September 27, 2026",
    category: "Governance & Administration",
    excerpt: "At the centre of this evolution sits SailPoint Identity Security Cloud (ISC), a platform that has redefined how organisations approach identity governance and administration (IGA).",
    content: `
# SailPoint Identity Security Cloud: Its Place in the Modern IAM Architecture
By an IAM consultant who's been governing access since before "cloud" meant anything.

---

## Introduction

Today I'm taking a slightly different approach. Instead of a deep dive into a single technical topic, I want to explore the broader landscape of modern identity and access management (IAM) architecture. Specifically, I want to discuss where SailPoint Identity Security Cloud fits into that landscape.

The identity and access management (IAM) landscape has undergone a fundamental transformation over the past decade. What was once a predominantly on-premises discipline focused on directory services and basic provisioning has evolved into a sophisticated, cloud-native ecosystem spanning human identities, machine accounts, and increasingly, AI agents. At the centre of this evolution sits SailPoint Identity Security Cloud (ISC), a platform that has redefined how organisations approach identity governance and administration (IGA).

For IAM architects and security leaders, understanding where ISC fits within a broader IAM architecture is essential. It is not simply a replacement for legacy IdentityIQ deployments, nor is it a standalone tool that operates in isolation. ISC is a governance layer that sits above authentication and access control systems, consuming identity data from authoritative sources and providing the intelligence, automation, and control mechanisms that ensure the right identities have the right access to the right resources — and nothing more.

This article examines ISC's architectural position, its core components, how it integrates with identity providers like Microsoft Entra ID, and why it represents a strategic shift toward what SailPoint calls "adaptive identity security." We will explore the technical foundations, the integration patterns that matter most in practice, and the governance capabilities that distinguish ISC from simpler access management solutions.

---

## The Architectural Foundation: SailPoint Atlas

To understand ISC, one must first understand the platform upon which it is built. SailPoint Atlas is the unified, multi-tenant SaaS platform that serves as the foundation for all Identity Security Cloud offerings . This is not merely a marketing distinction — it has profound architectural implications.

Atlas was designed from the ground up for internet-scale, cloud-native operation. Unlike legacy IGA platforms that were retrofitted for cloud deployment, Atlas was built with the assumption that identity data would span cloud platforms, SaaS applications, customer-hosted systems, and traditional data centre infrastructure . The platform provides the underlying services — connectivity, data processing, machine learning, event-driven orchestration — that power ISC's governance capabilities.

### The Identity Cube

A critical architectural element within Atlas is the Identity Cube, SailPoint's unified data model for representing every identity in the organisation . The Identity Cube provides a 360-degree view of each identity, consolidating attributes, entitlements, access rights, and risk scores into a single, queryable entity. This is not an optional module or an add-on; it is the core data structure that enables ISC's governance functions. When an identity is created, correlated, or modified, the Identity Cube reflects that change, and all downstream governance processes — certifications, role mining, risk analysis — operate against this unified model.

The Identity Cube's extensibility is significant. Organisations can add custom attributes relevant to their specific governance requirements, and these attributes become available for policy evaluation, certification decisions, and reporting . This flexibility is essential for organisations with complex regulatory obligations or industry-specific access models.

---

## Core Components: How ISC Operates

Identity Security Cloud is not a monolithic application. It comprises several distinct components that work together to deliver governance across diverse environments.

### The Cloud Tenant

The ISC cloud tenant is the central control plane. This is where administrators configure sources, define identity profiles, build access models, run certifications, and manage the platform's overall behaviour . The tenant is multi-tenant SaaS — SailPoint manages the infrastructure, patching, and scaling, while customers configure their governance policies within their isolated instance.

From a security perspective, the tenant includes several critical configuration areas. Strong authentication (MFA) can be enforced for administrative access, ensuring that even if credentials are compromised, attackers cannot easily gain control of the governance platform itself . Sign-in policies control session duration and idle timeouts, while IP restrictions can limit access to trusted networks or geographies .

#### Emergency Access Administrators

Emergency access administrators are a particularly important element of tenant security . These accounts can bypass SSO and sign in directly to the tenant, ensuring that administrators retain access even if the identity provider is unavailable. Organisations should carefully manage these accounts, ensuring they are protected with strong credentials and monitored for anomalous activity.

### Virtual Appliances and Connectivity

While ISC is a cloud service, most organisations have on-premises or private cloud systems that must be integrated into the governance programme. This is where Virtual Appliances (VAs) come into play.

A Virtual Appliance is a Linux-based component (running on FlatCar OS) that is hosted within the customer's environment . VAs perform all outbound communication between the ISC tenant and target systems — they poll the tenant's queue for work items and push results back, never requiring inbound connections from the cloud to the customer network . This architecture is fundamental to ISC's security model: the customer's perimeter remains intact, and no inbound firewall exceptions are required.

For high availability, SailPoint recommends deploying a cluster of at least two VAs . This ensures that if one appliance fails, the other can continue processing aggregation and provisioning tasks. The cluster operates as a single logical entity from the ISC tenant's perspective, with work distributed across available appliances.

Virtual Appliances are not required for all sources. SaaS connectors can connect directly to cloud applications without a VA, using APIs or SCIM endpoints . This distinction matters for architecture design: organisations should use SaaS connectors where possible to reduce on-premises infrastructure footprint, reserving VAs for systems that genuinely require local connectivity.

### Sources and Identity Profiles

In ISC, a source represents a connection to a system that contains identity or account data . Sources can be connected via direct connectors (using VAs or SaaS connectors) or via flat file feeds for systems that cannot be integrated in real time.

The most important architectural decision in an ISC deployment is the selection of authoritative sources. These are the sources that define the organisation's identity population — typically HR systems such as Workday, SuccessFactors, or BambooHR. When an authoritative source is configured, ISC creates identity profiles that transform raw account data into governed identities. All other sources are then correlated to these identities, creating a unified view of each person's access across the enterprise.

The order of operations matters here. Best practice is to configure authoritative sources first, establish identity profiles, and only then connect downstream applications and directories . This ensures that when accounts are aggregated from non-authoritative sources, they can be immediately correlated to existing identities rather than creating orphaned or duplicate records.

---

## ISC's Position in the IAM Architecture Stack

To understand ISC's architectural role, it is helpful to think in terms of layers. A typical enterprise IAM architecture comprises several distinct but interconnected layers:

**The Directory Layer** includes systems like Microsoft Entra ID (formerly Azure AD), on-premises Active Directory, and LDAP directories. These are the systems that authenticate users and store core identity attributes.

**The Access Management Layer** encompasses SSO, MFA, Conditional Access, and federation services. This is where authentication policies are enforced and session security is managed.

**The Governance Layer** is where ISC operates. This layer consumes identity data from directories and applications, applies governance policies, automates lifecycle processes, and provides the audit and certification capabilities required for compliance.

**The Privileged Access Layer** manages elevated accounts and just-in-time access for administrative users.

**The Data Security Layer** governs access to sensitive data stores, applying classification and protection policies.

ISC's position in this stack is deliberate. It is not an authentication system — it does not replace Entra ID or Okta for sign-in. It is not a directory — it does not store the authoritative source of user attributes. Instead, ISC is the governance brain that sits above these systems, ensuring that access is granted appropriately, reviewed regularly, and revoked promptly when no longer needed.

This architectural positioning has important implications. ISC must integrate with directories and access management systems to be effective — it consumes identity data from them and can trigger provisioning actions within them. But it also operates independently of any single vendor's ecosystem, providing cross-platform governance that spans cloud, hybrid, and on-premises environments.

---

## Integration with Microsoft Entra ID: A Common Architecture Pattern

For organisations using Microsoft's identity platform, the integration between ISC and Entra ID is a particularly important architectural consideration. This is not merely a technical integration — it represents a division of responsibilities between two complementary systems.

### Authentication vs. Governance

Entra ID provides authentication, Conditional Access, MFA, and identity protection. It is the system that validates credentials, evaluates sign-in risk, and enforces session policies. ISC provides governance — it determines what access a user should have, provisions that access into downstream systems, and reviews whether the access remains appropriate over time.

This division is deliberate and beneficial. Entra ID is optimised for real-time authentication decisions at scale. ISC is optimised for governance workflows that may span days or weeks — access requests, approvals, certifications, role mining. Attempting to do governance in Entra ID (through its native Identity Governance features) is possible for simpler use cases, but ISC provides deeper capability for complex environments.

### Configuration for SSO and Provisioning

The integration begins with configuring ISC as an enterprise application in Entra ID for SSO purposes . This allows administrators to control who can access the ISC tenant through Entra ID's access controls, and enables users to sign in to ISC using their Microsoft credentials.

The configuration involves adding SailPoint Identity Security Cloud from the Entra ID gallery and configuring SAML-based SSO . The identifier and reply URLs follow SailPoint's standard format, with the tenant name substituted appropriately. Once configured, Entra ID becomes the identity provider for ISC access, meaning that MFA policies, Conditional Access rules, and sign-in risk evaluations apply to ISC administrative access as they would to any other enterprise application.

### Provisioning Integration

Beyond SSO, the more significant integration is provisioning. ISC can act as a provisioning source for Entra ID, creating and managing user accounts based on governance decisions . This is typically implemented through the SCIM 2.0 standard, which provides a standardised interface for user lifecycle operations.

The architectural pattern is as follows: ISC aggregates identity data from authoritative sources (HR systems), correlates accounts across systems, and when a joiner-mover-leaver event occurs, ISC provisions the appropriate changes into Entra ID via SCIM. Entra ID then propagates those changes to downstream Microsoft 365 services and any other applications that rely on Entra ID as their identity source.

This pattern ensures that Entra ID remains the authentication authority while ISC remains the governance authority — each system doing what it does best.

### Microsoft Graph and SCIM Integration

For organisations with complex hybrid environments, the integration between ISC and Microsoft Graph is increasingly important. Microsoft Graph provides programmatic access to Entra ID data, and ISC can leverage Graph APIs to enrich its identity data, detect anomalies, or perform targeted remediation.

In practice, this integration enables scenarios such as: detecting users who have Entra ID accounts but are not present in the authoritative HR source (suggesting orphaned accounts), identifying excessive privileged role assignments that should be reviewed, or correlating sign-in activity data from Entra ID with governance data in ISC to identify risky access patterns.

---

## The Adaptive Identity Security Vision

SailPoint has articulated a vision for what it calls "adaptive identity security" , and ISC is the vehicle through which this vision is delivered . Understanding this vision is essential for architects planning long-term identity strategies.

The core premise is that traditional identity governance — periodic access reviews, manual certifications, static role assignments — cannot keep pace with modern IT environments. Cloud adoption, AI proliferation, and the explosion of non-human identities have made the old model insufficient . What is needed is continuous, automated, real-time governance that detects and responds to risk as it emerges, rather than weeks or months later.

### The Four Pillars of Adaptive Identity Security

SailPoint's adaptive identity framework rests on four pillars :

**Real-Time Governance**: Moving from scheduled reviews to continuous monitoring and automated remediation. Instead of certifying access quarterly, ISC continuously evaluates whether access is appropriate based on policy, risk signals, and usage patterns. When an anomaly is detected, remediation can be triggered automatically.
**Protection for AI and Machine Identities**: Extending governance beyond human users to service accounts, API keys, bots, and AI agents. SailPoint has introduced connectors for governing AI agents from platforms including Microsoft 365 Copilot, Salesforce Agentforce, and ServiceNow AI Platform . This recognises that non-human identities now outnumber human ones in many organisations and carry significant risk if ungoverned.
**Universal and Dynamic Privilege Management**: Reducing standing privileged access in favour of just-in-time elevation. Instead of users holding administrative rights permanently, ISC can grant temporary access when needed, monitor its use, and revoke it automatically. This aligns with Zero Trust principles and reduces the blast radius of compromised accounts.
**Integrated Threat Management**: Connecting identity governance with security operations. By integrating with SIEM and EDR platforms, ISC can correlate identity context with threat signals, enabling faster detection and response to identity-based attacks.

---

## Practical Architecture Considerations

For architects designing or evolving ISC deployments, several practical considerations merit attention.

### Source Prioritisation and Identity Correlation

The quality of ISC's governance output depends entirely on the quality of its identity data. If identity correlation is poor — if accounts from different sources are not correctly linked to the same identity — governance decisions will be unreliable.

The architectural principle is to establish a clear hierarchy of sources, with authoritative sources at the top. Identity profiles should be carefully configured to ensure that correlation rules correctly match accounts to identities . This often requires collaboration between IAM teams and HR or IT operations teams to ensure that the attributes used for correlation (employee ID, email address, username patterns) are consistent across systems.

### Governance Groups and Delegation

ISC supports the concept of governance groups — collections of users who can perform administrative or review functions for specific sources or access models . This enables delegated administration, where business unit owners can manage access for their teams without requiring central IAM team involvement for every change.

From an architectural perspective, governance groups should be designed to align with organisational structure. A source representing a finance application might be governed by a finance governance group, while a source representing engineering tools might be governed by an engineering governance group. This distributes the governance workload and ensures that reviews are performed by people with the context to make informed decisions.

### Provisioning Enablement

By default, new sources in ISC are read-only . This is a deliberate safety measure: aggregation and visibility come first, and provisioning capabilities must be explicitly enabled. Architects should consider which sources genuinely require provisioning (the ability to create, modify, or delete accounts) versus which can remain read-only.

Enabling provisioning on a source requires careful consideration of the connector's capabilities, the target system's API limitations, and the governance workflows that will trigger provisioning actions. Testing in a non-production environment is essential before enabling provisioning in production.

### The Role of IQService

For Active Directory integration, ISC requires the IQService component for provisioning actions . IQService is a Windows service that runs in the customer's environment and acts as a bridge between the virtual appliance and Active Directory. Without IQService, ISC can aggregate data from AD (read-only) but cannot perform provisioning operations.

SailPoint has recently strengthened IQService security, requiring TLS configuration and explicit enablement of privileged services such as ScriptExecutor and gMSAPasswordData . Architects should ensure that IQService instances are upgraded to the latest version and that TLS is properly configured to avoid service interruptions.

---

## ISC and the Broader IAM Ecosystem

ISC does not operate in isolation. It is part of a broader IAM ecosystem that includes directories, access management platforms, privileged access management (PAM) tools, and data security solutions.

### Integration with PAM

While ISC governs access to applications and systems, PAM solutions like CyberArk or BeyondTrust govern privileged credentials and sessions. The boundary between these systems is an architectural consideration: ISC can govern who should have privileged access (through access requests, certifications, and role definitions), while PAM enforces the actual credential management and session controls.

Increasingly, these systems integrate — ISC can trigger PAM workflows for just-in-time privilege elevation, and PAM systems can feed session data back to ISC for risk analysis.

### Integration with Data Security

SailPoint's Data Access Security offering extends governance to unstructured data, integrating with ISC's Identity Graph to visualise data access pathways and identify sensitive data exposure. This is particularly relevant for organisations subject to data protection regulations, where understanding who has access to sensitive documents and files is a compliance requirement.

### The Market Context

The IAM market is growing rapidly, driven by cloud adoption, regulatory requirements, and the proliferation of non-human identities. The identity and access management market was valued at approximately $21.8 billion in 2025 and is projected to reach $45.2 billion by 2030, representing a compound annual growth rate of 15.7%. Within this market, identity governance and administration is a significant and growing segment, and non-human identity management is the fastest-growing technology segment at 22.28% CAGR.

ISC's positioning aligns with these market trends. Its cloud-native architecture, support for non-human identities, and AI-driven governance capabilities address the evolving needs of enterprises that are migrating to cloud, adopting AI, and facing increasingly sophisticated identity-based threats.

---

## Conclusion

SailPoint Identity Security Cloud represents a fundamental shift in how identity governance is architected and delivered. It is not merely a cloud version of IdentityIQ, nor is it a simple access management tool. ISC is a governance platform built on the Atlas multi-tenant SaaS foundation, designed to provide continuous, intelligent governance across cloud, hybrid, and on-premises environments.

Its architectural position is clear: ISC sits above authentication and access control systems, consuming identity data from directories and applications, applying governance policies, and automating lifecycle processes. It integrates with Microsoft Entra ID for SSO and provisioning, while maintaining a clear separation of responsibilities — Entra ID authenticates, ISC governs.

For IAM architects, the key considerations are: establishing high-quality authoritative sources and identity correlation, designing governance groups that align with organisational structure, carefully enabling provisioning only where appropriate, and planning for integration with PAM and data security systems. The investment in ISC is an investment in a governance layer that will become more valuable as identity estates grow more complex and non-human identities proliferate.

The shift toward adaptive identity security — real-time governance, protection for AI and machine identities, dynamic privilege management, and integrated threat management — signals SailPoint's direction and the direction of the IAM market more broadly. Organisations that architect their identity programmes around these principles will be better positioned to secure their environments, demonstrate compliance, and adapt to whatever the next evolution of identity technology brings.

`
  },
  {
    id: "10",
    title: "The Phishing-Resistant MFA Gap: Why We Know Better But Still Aren't Doing It",
    slug: "the-phishing-resistant-mfa-gap-why-we-know-better-but-still-arent-doing-it",
    date: "September 12, 2026",
    category: "Authentication & Access",
    excerpt: "93% of users still use passwords. The majority of authentication is still happening with a credential that can be stolen, replayed, and phished.",
    content: `
# The Phishing-Resistant MFA Gap: Why We Know Better But Still Aren't Doing It
By an IAM consultant who's been governing access since before "cloud" meant anything.

---

## Introduction

I have a confession to make. My last blog post was close to a month ago. Between client work, family commitments, and the general chaos of life, the writing slipped. But here's the thing: the topic I want to tackle today has been staring me in the face every single day. It's the gap between what we know we should be doing and what we're actually doing.

That gap has a name: phishing-resistant MFA.

Let me be clear about where I stand. I've spent thirty years in identity. I've watched us move from passwords to SMS codes to push notifications. Each step was an improvement. None of them solved the fundamental problem. Phishing still works because users still type credentials into fake websites. The attacker doesn't break the cryptography. They just ask the user to hand over the keys.

Phishing-resistant MFA—passkeys, FIDO2, WebAuthn—changes that equation. It's not an incremental improvement. It's an architectural shift. The credential never leaves the device. There's nothing to phish.

So why, according to the FIDO Alliance's own research, have only **13% of organizations deployed passkeys at scale**, despite 93% being somewhere on the adoption path?

That's the question I want to explore. Not the theory. The practice. The reasons we're stuck.

---

## The Data: A Confidence Gap in Plain Sight

Let me start with the numbers, because they tell a story that's hard to ignore.

Okta's Secure Sign-in Trends Report 2025 found that phishing-resistant authenticators—FastPass, WebAuthn, and smart cards combined—grew from **8.6% to 14.0%** of users in a single year. That's a 63% increase. FastPass alone nearly doubled, from 6.7% to 13.3%. SMS usage declined from 17.5% to 15.3%. Password use dipped from 95.1% to 93.0%.

These are good numbers. They show movement. But look closer: **93% of users still use passwords**. The majority of authentication is still happening with a credential that can be stolen, replayed, and phished.

Now look at the FIDO Alliance's June 2026 report. They surveyed 500 IT and cybersecurity decision makers across the US, Canada, UK, France, and Germany. The findings are striking:

- **93%** of organizations are somewhere on the path to adopting phishing-resistant MFA.
- **65%** report high or expert technical familiarity with passkeys
- Only **13%** have deployed passkeys at scale.

And here's the kicker: **70% of respondents reported at least one identity-related security incident**. The report links the low deployment rate directly to the high incident rate.

In other words: we know what to do. We're just not doing it.

---

## The Operational Barriers Are Real

I don't want to dismiss the barriers. They are real, and they are significant. Cisco Duo's 2025 State of Identity Security report identified four leading obstacles:


| Barrier | Percentage Citing It |
|--------|----------------------|
| Token management complexity | 57% |
| Extra training and support requirements | 53% |
| Hardware token cost | 47% |
| Compatibility issues | 45% |

These aren't excuses. They're legitimate operational challenges. Deploying passkeys at scale means integrating with existing SSO models, MFA mechanisms, and device management workflows. It means managing the lifecycle of credentials that are tied to devices, not servers. It means retraining users, updating help desk procedures, and handling the inevitable "I lost my phone" scenarios.

But here's what strikes me: **only 19% of security teams have fully implemented FIDO2 tokens**, despite widespread recognition of phishing-resistant MFA as a priority. And **87% of security leaders call phishing-resistant MFA a priority, but only 33% feel confident in their phishing controls**.

That's a confidence gap. And it's one that attackers are actively exploiting.

---

## The Threat Landscape Is Forcing the Issue

The 2025 Verizon Data Breach Investigations Report (DBIR) provides the context we need to take this seriously:

- **Credential abuse accounted for 22% of all breaches** as an initial access vector—the single most common entry point

- **Phishing accounted for 16% of breaches**

- **Infostealers compromised 30% of corporate-managed devices and 46% of unmanaged devices in their logs**

- Among ransomware victims, **54% had prior credential exposure** in infostealer logs

And the Snowflake breach demonstrated the pattern perfectly: attackers exploited the fact that **MFA was not mandatory**, then used compromised credentials to breach approximately 165 customer accounts. Roughly 80% of those accounts had prior credential exposure in infostealer logs.

The DBIR also documents a surge in **MFA bypass techniques**, including prompt bombing, token theft, and adversary-in-the-middle attacks. These are precisely the attacks that phishing-resistant MFA is designed to stop. Token theft doesn't work when the token never leaves the device. Adversary-in-the-middle doesn't work when there's no credential to intercept.

**The attackers are evolving. Our defenses need to evolve faster.**

---

## The Business Case Is Overwhelming

If the security argument isn't enough, the business case should be.

The FIDO Alliance's Passkey Index, launched in October 2025, provides the first composite view of passkey utilization from companies including Amazon, Google, Microsoft, PayPal, and TikTok. The findings are remarkable:

| Metric | Passkeys | Other Methods |
|--------|----------------------|----------------------|
| Sign-in time | 8.5 seconds | 17.2 seconds |
| Sign-in success rate | 93% | 63% |
| Help desk incidents |  **81% reduction** | - |

Passkeys reduce sign-in time by 49%. They have a 30% higher success rate than other methods. And they led to an 81% reduction in login-related help desk incidents.

The Liminal Passkey Adoption Study 2025, which surveyed 200 organizations, found that 63% of respondents ranked passkeys as their top authentication investment priority for the next year. 85% of those who had already adopted passkeys reported strong satisfaction with both the decision and the results. 97% said their organization is willing to fully transition to a passkey-based strategy.

And here's the part that should get the attention of every CISO: 49% of current implementers report adoption rates exceeding 75%, outperforming their initial expectations.

Passkeys work. The people who deploy them are happy. So why aren't we deploying them?

---

## The Enrollment Problem: Where Rollouts Stall

This is where the operational reality meets the strategic intent. I've seen it in my own consulting work. The technology works. The business case is sound. But the rollout stalls.

Security Boulevard's analysis of why most passkey rollouts stall at 5% adoption identified eight patterns that successful rollouts share. The most important insight is that you cannot treat passkey enrollment as a technical problem. It's a behavioral problem.

The data from MojoAuth's customer rollouts is instructive:

- 43% of organizations cite implementation complexity as their primary barrier
- User experience and enrollment design significantly impact adoption rates
- eBay found that biometric prompts right in front of the user led to 75% adoption, while asking users to find the setting manually led to 10% adoption

The lesson is clear: if you want people to adopt a new security habit, you have to make the path of least resistance the secure one.

The eight patterns that successful rollouts share are:

1. Conditional UI — Surface passkeys automatically when the browser supports them
2. Post-login prompts — Ask after a successful login, when trust is highest
3. Mandatory for high-value roles — Apply selectively, not as a blanket policy
4. Signup default with opt-out — Make passkeys the default for new accounts
5. Re-prompt on login friction — Offer passkeys when users hit a password problem
6. Cross-device onboarding — Use QR codes to enroll on the device users actually use
7. Lifecycle re-engagement — Prompt at natural moments: next login, billing update, security settings
8. One-time education tooltips — A single sentence explaining what a passkey is raises completion by 30-50%

The sequence matters. Start with zero-risk patterns. Measure. Then add friction only when you've established the baseline.

---

## The Regulatory Pressure Is Building

If the business case and the threat landscape aren't enough, regulation is now forcing the issue.

In the UAE, India, and the Philippines, financial institutions face mid-2026 deadlines to kill off SMS-based one-time passwords. This isn't a suggestion. It's a mandate.

The FIDO Alliance's research found that 45% of organizations cite reducing phishing and credential-based breaches as the main driver for moving to passwordless authentication. 44% cite the need to cut IT costs from password resets and help desk load.

And Microsoft's own experience shows what's possible. The company reported that 92% of its employee accounts now use phishing-resistant MFA as part of its Secure Future Initiative. If Microsoft can achieve 92% adoption across a workforce of hundreds of thousands, the rest of us have no excuse.

---

## What This Means for IAM Practitioners

I want to bring this back to you—the IAM practitioner reading this. What should you actually do?

### 1. Stop treating passkeys as a project. Treat them as a program.

The organizations that succeed with passkeys don't run a six-month project and declare victory. They build a program that runs indefinitely. Enrollment is not a one-time event. It's a continuous process that touches every user lifecycle event: onboarding, device change, role change, offboarding.

### 2. Measure what matters.

The wrong question is "how many users have created a passkey." The right question is "what percentage of authenticated sessions completed via passkey in the last 30 days". Track passkey login share, not enrollment counts. Enrollment without usage is vanity.

### 3. Design for behavior, not technology.

The eBay data is a warning: manual enrollment leads to 10% adoption. Contextual prompts lead to 75%. Your enrollment flow is a product design problem, not an infrastructure problem. Treat it that way.

### 4. Start with the zero-risk wins.

Conditional UI. Education tooltips. Post-login prompts. These are low-friction, high-impact starting points. Measure the baseline. Then layer on more assertive patterns as you learn what works in your environment.

### 5. Don't deploy passkeys in isolation.

The FIDO Alliance research found that even among organizations that had deployed passkeys, 57% still relied on phishable methods for primary everyday workforce authentication. Adding a secure door doesn't help if the old door remains open. Passkeys need to be part of a comprehensive identity governance strategy that includes access revocation, lifecycle management, and continuous monitoring.

---

## Conclusion: The Gap Is a Choice

The 13% deployment figure is not a technology failure. It's a governance failure. It's a prioritization failure. It's a failure to treat identity security as a risk metric that belongs on the board agenda, not just in the IT department.

The data is unambiguous. Passkeys are faster, more secure, and cheaper to operate. They reduce help desk load. They improve user experience. They stop the attacks that keep showing up in the breach reports.

And yet, most of us are still stuck at 5% adoption, waiting for the perfect moment.

The perfect moment was yesterday.

The gap between 93% awareness and 13% deployment is not a knowledge gap. It's an execution gap. And execution is a choice.
`
  },
  {
    id: "9",
    title: "When OAuth Becomes a Backdoor: Three Lessons from the Vercel Breach for IAM Professionals",
    slug: "when-oauth-becomes-a-backdoor-three-lessons-from-the-vercel-breach-for-iam-professionals",
    date: "August 22, 2026",
    category: "Security",
    excerpt: "In April 2026, Vercel confirmed a security incident: attackers gained access to a Vercel employee's Google Workspace account through an OAuth grant to a third-party AI tool called Context.ai, and from there moved laterally into Vercel's internal systems.",
    content: `
# When OAuth Becomes a Backdoor: Three Lessons from the Vercel Breach for IAM Professionals
By an IAM consultant who's been governing access since before "cloud" meant anything.

---

## Introduction: The Vercel Breach and the OAuth Backdoor

In April 2026, Vercel confirmed a security incident: attackers gained access to a Vercel employee's Google Workspace account through an OAuth grant to a third-party AI tool called Context.ai, and from there moved laterally into Vercel's internal systems. Initially, the incident was framed as an individual mistake—an employee who over-authorised an app. But as the details emerged, a more uncomfortable picture took shape. This was not a story about a careless click. It was a structural identity trust failure.

As an IAM professional, I paid attention to this breach not just because I use Vercel to host websites, but because it captures a defining tension of the AI + SaaS era: as we delegate more trust to third-party applications, identity boundaries are blurring, and our governance frameworks have not caught up.

---

## 1. The Attack Chain: This Was Not a Code Breach 

The key to understanding this incident is to abandon the narrative that "someone hacked Vercel." The attackers did not exploit a zero-day in Vercel's code. They did not breach its infrastructure. They walked a path that was fully authorised and fully trusted.

The attack started outside Vercel. According to reports, an employee at Context.ai downloaded a Roblox cheat, which was infected with Lumma Stealer malware. That malware searched the compromised machine for valuable tokens, including access keys for Vercel and other service providers. With Context.ai's systems compromised, OAuth tokens stored within them were stolen—including a token belonging to a Vercel employee.

That Vercel employee had previously signed into Context.ai using their corporate account and granted "Allow All" OAuth permissions, giving the tool access to their enterprise Google Workspace. Once the attackers had the token, they did not need a password. They did not need to defeat MFA. They simply presented a valid token and entered Vercel's Google Workspace environment as that employee, then moved laterally into further internal systems.

Vercel's CEO described the attackers with "remarkable speed and depth of understanding." That is not surprising. The attackers were not breaking in. They were using access that had already been granted.

---

## 2. The Core Problem: The Clean Source Principle Broke Down

This incident brings to mind a concept that was hammered home in the Active Directory era: the **Clean Source Principle**.

The principle states: the security of any resource is no stronger than the security of every other resource that has control over it.

In an AD environment, this is why domain controllers must be treated as Tier 0 assets. Anything that can modify a domain controller can, indirectly, modify everything the domain controls. As SpecterOps analysis has pointed out, the Vercel incident is the same principle manifesting at the **identity layer**.

The moment the Vercel employee granted Context.ai "Allow All" OAuth permissions, Context.ai's infrastructure security, its endpoint security, and its employees' security habits all became part of Vercel's identity security posture. The security of Vercel's Google Workspace now depended, in part, on Context.ai's AWS security groups and on whether a Context.ai employee clicked on that Roblox cheat.

That dependency was never modelled, never assessed, and never entered any risk register. It was created by an employee clicking through an OAuth consent screen. No identity team analysed what it meant. No one marked that trust edge on an attack graph.

**This is the most dangerous structural blind spot of the AI + SaaS era: trust relationships are being established outside the visibility of IAM.**

---

## 3. Non-Human Identities: The Shadow Administrators We Ignore

One fact in this incident is easy to overlook: Context.ai was not "a tool." **It was a non-human identity (NHI) with delegated rights**. See my previous blog post, "The Rise of Non-Human Identities," for a deep dive into the NHI problem.

Every AI tool that receives OAuth authorisation functions as a kind of service account within your identity system. It can authenticate. It can access resources. It can act on a user's behalf. But unlike human accounts, it is almost never included in regular access reviews.

StrongDM's analysis put it bluntly: "Most organisations today are granting AI tools the same standing access as employees while overlooking the same security controls." Once an OAuth grant is established, it is effectively permanent. Tokens do not expire when an employee leaves. They do not reset when passwords change. They do not become invalid when MFA is enabled.

Proofpoint has previously demonstrated that OAuth applications can serve as a **persistence mechanism**: even after original credentials are rotated, application-layer access can survive.

Context.ai, as an "AI Office Suite," would have requested deep access to deliver value: email, files, calendars, internal knowledge bases. Those are exactly the things attackers want. And when that tool was compromised, **the attackers inherited every right it had been granted**, regardless of how those rights were granted.

**This is the shadow administrator problem: your IAM system cannot see them, your SIEM alerts do not cover them, and your access review process does not include them. But they hold real rights.**

---

## 4. The "Sensitive / Non-Sensitive" Environment Variable Trap

There is a highly practical lesson in the Vercel incident: attackers enumerated and read environment variables that had not been marked as "sensitive." In Vercel's system, these are stored in plaintext.

Vercel subsequently changed the default for new variables to "sensitive" and required users to rotate all non-sensitive variables. But a deeper issue was exposed: the binary "sensitive / non-sensitive" classification is itself fragile.

Tanium's analysis raised the key question: "Can this value reveal architecture, naming conventions, or trust relationships? Can this variable help enumerate downstream systems?"

A seemingly harmless variable—an internal service hostname, a non-production API endpoint, a team naming convention—can become a springboard for enumeration and lateral movement in an attacker's hands. The Vercel attacker's rapid enumeration of non-sensitive variables demonstrated "a deep understanding of Vercel systems."

**When you make a binary "sensitive / non-sensitive" decision about environment variables, you are gambling that attackers will not use "non-sensitive" information to find "sensitive" things. That bet is becoming less and less favourable.**

---

## 5. An Action Framework for IAM Professionals

The Vercel incident is not an isolated case. It reflects a widening gap between the speed of AI tool adoption and our identity governance capability. Here is what I believe should be prioritised.

### 5.1 Audit OAuth Grants, Especially AI Tools

Ask a simple question that is often impossible to answer: Which third-party applications have access to our corporate identities, and with what scopes?

Focus on:

- Tools authorised by engineering and product teams (OAuth sprawl often begins there)
- High-privilege scopes (mail, files, directory)
- Integrations that are no longer active or rarely used
- Tools authorised with personal accounts that were later linked to corporate resources

### 5.2 Treat AI Tools as Real Identities

Every AI integration—whether a SaaS tool like Context.ai or a connection broker like Claude or Copilot via MCP—should be treated as an identity with real permissions.

That means:

- A clear owner and accountability
- Regular access reviews
- Audit logs and traceability
- A "time-bounded" access model, not permanent authorisation

### 5.3 Rethink the Standing Access Model

StrongDM's proposed alternative deserves serious consideration: Just-in-Time access. OAuth authorisation exists only for an active, approved session. Even if the tool is compromised somewhere in the chain, the exploitable window shrinks from months to minutes.

For AI tools, this means: rather than letting an agent inherit the full rights of its connected identity, each tool invocation is individually evaluated, scoped, and time-limited.

### 5.4 Do Not Rely on "Sensitive / Non-Sensitive" Classification to Protect Secrets

The Vercel lesson shows that asking humans to correctly label every secret is unreliable. A more resilient model is credential injection: secrets are injected by a gateway at connection time and do not exist after the session ends. There is nothing to steal because the credential never lands anywhere an attacker can reach.

---

## 6. Conclusion: Access Is the New Perimeter, Trust Is the New Vulnerability

Tanium wrote in its analysis: "In identity-driven security incidents, the hardest part is often building confidence in what actually happened."

What is most unsettling about the Vercel incident is not the attackers' technical skill, but the contrast between the legitimacy of the attack path and its invisibility. The entire path was authorised. It was "normal." It was what OAuth is designed to do. Yet almost no organisation can see that path, assess that path, or dismantle that path before an attacker uses it.

As IAM professionals, our job is expanding from "managing user access to resources" to "managing trust relationships between identities." Because in a world of AI agents, SaaS integrations, and non-human identities everywhere:

**Access is the new perimeter**

**Identity is the control plane**

**And unexamined trust is the greatest vulnerability**
`
  },
  {
    id: "8",
    title: "The Rise of Non-Human Identities: Why Machines Are Outnumbering Humans 80:1 and What to Do About It",
    slug: "rise-of-non-human-identities-machines-outnumbering-humans",
    date: "August 8, 2026",
    category: "AI & Future Tech",
    excerpt: "The definition of identity has expanded dramatically. Applications, containers, APIs, scripts, and service accounts now operate as independent identities alongside your employees, customers, and partners across cloud and hybrid environments. These non-human identities (NHIs) are deeply embedded in IT infrastructure. In many organisations, they outnumber human identities by a factor of 25 to 50. According to Palo Alto Networks' 2026 Identity Security Landscape report, the ratio stands at 109 machine identities for every human—up from 82-to-1 just a year earlier.",
    content: `
# The Rise of Non-Human Identities: Why Machines Are Outnumbering Humans 80:1 and What to Do About It
By an IAM consultant who's been governing access since before "cloud" meant anything.

---

As an IAM consultant with over three decades of experience, I have witnessed identity and access management evolve through multiple paradigm shifts. I remember when Active Directory forests were the centre of the identity universe, when RBAC was a cutting-edge concept, and when "cloud identity" was something we talked about in future-state architecture meetings. But nothing—absolutely nothing—has prepared the IAM industry for what is happening right now.

The definition of identity has expanded dramatically. Applications, containers, APIs, scripts, and service accounts now operate as independent identities alongside your employees, customers, and partners across cloud and hybrid environments . These non-human identities (NHIs) are deeply embedded in IT infrastructure. In many organisations, they outnumber human identities by a factor of 25 to 50 . According to Palo Alto Networks' 2026 Identity Security Landscape report, the ratio stands at 109 machine identities for every human—up from 82-to-1 just a year earlier .

Here is the uncomfortable truth: your organisation is already a machine-majority environment. The question is whether your identity controls are governing all of those identities or just the humans .

---

## What Exactly Are Non-Human Identities?

A non-human identity is any non-human entity that must authenticate to perform an action . Common examples include:

- **Cloud service accounts**: These are identities created for applications, scripts, or services that need to access cloud resources. They often have elevated privileges and can be a target for attackers if not properly managed.
- **Kubernetes workloads and pods**: In containerized environments, each workload or pod may have its own identity to access APIs, databases, or other services. These identities are often short-lived and can be difficult to track.
- **API clients and integrations**: Many applications communicate with each other through APIs, and each API client may have its own identity. These identities can be used to automate processes but can also be exploited if not secured.
- **CI/CD tools and automation scripts**: Continuous integration and deployment pipelines often use service accounts to automate builds, tests, and deployments. These identities can have access to sensitive environments and should be carefully managed.
- **Serverless functions and microservices**: In serverless architectures, each function or microservice may have its own identity to access resources. These identities can be ephemeral and require careful monitoring.
- **AI agents and background processes**: As AI and machine learning become more prevalent, these systems often operate with their own identities to access data and perform computations.
- **IoT devices and edge computing nodes**: In the Internet of Things (IoT) ecosystem, each device may have its own identity to communicate with cloud services or other devices. These identities can be numerous and challenging to manage.
- **RPA bots and virtual assistants**: Robotic process automation (RPA) tools and virtual assistants often operate with their own identities to perform tasks on behalf of users. These identities can have access to sensitive systems and data.
- **Service accounts in Active Directory or LDAP**: Traditional service accounts used for running applications or services can also be considered non-human identities. These accounts often have elevated privileges and should be monitored closely.

Unlike human users, these identities operate continuously, authenticate non-interactively, cannot perform MFA challenges, and are frequently created and destroyed automatically . They are, in many ways, the invisible workforce that actually runs your business.

---

## The NHI Ecosystem: A Closer Look

To understand the scale of the challenge, it helps to break down what we are actually talking about. The Cloud Security Alliance's recent report, "Defining Non-Human Identity," frames these actors as distinct categories requiring different governance approaches.

**Service and Integration Accounts** represent the traditional machine identity. These are the service accounts, application accounts, and integration credentials that have existed for decades. They are typically long-lived, often over-privileged, and frequently forgotten.

**Workloads and Microservices** are the identity layer of modern cloud-native architectures. Every container, every Kubernetes pod, every serverless function has an identity. These identities are ephemeral by nature, created and destroyed in seconds, and they rarely follow traditional IAM lifecycles.

**Infrastructure and Devices** include everything from network switches to IoT sensors. These identities create an operational challenge of scale and updateability—rotating keys on a fleet of remote devices is not the same as rotating a token for a cloud workload.

**AI Agents** represent the newest and fastest-evolving class of non-human identity. Unlike static scripts, AI agents powered by large language models can reason, plan, and execute complex chains of tasks independently . An agent might query sensitive data in Salesforce, modify infrastructure in AWS, or execute workflows in internal tools—all while operating autonomously.

---

## The Governance Problem: Why Traditional IAM Fails

Traditional IAM systems were designed to manage human identities with predictable, human-scale lifecycles. NHIs do not follow that pattern. They are dynamic, distributed, and tightly coupled to workloads . This mismatch creates what I call the "IAM Gap"—the widening chasm between the identities that exist in modern IT environments and the identities that IAM systems can actually see and govern.

### The Accountability Vacuum

From a governance perspective, NHIs create a fundamental accountability problem. When an employee leaves, your IAM system deactivates their user account. But what about the six service accounts they created? The fourteen API keys they provisioned across different systems? The AI agent they authorised last month?

Without lineage, those identities become orphaned. Still active. Still privileged. No owner.

This is the identity governance gap that most organisations don't realise they have. Your IAM program is built on a fundamental assumption: every identity maps to a person. But when you look at your actual identity landscape, most identities aren't human anymore.

### The Silo Problem

The fragmentation of responsibility compounds the issue. DevOps teams manage pipelines and secrets. Security teams monitor for threats. IAM teams focus on human users. But who owns the NHIs?

This fragmentation creates gaps. Orphaned service accounts, hardcoded credentials, and inconsistent credential rotation are the outcomes, all of which consistently contribute to security incidents and breaches. NHIs amplify these issues because they operate continuously and often with elevated privileges. If you have ever audited a long-standing instance of Active Directory, you understand the issue.

Furthermore, this fragmentation slows down response times when incidents are detected. Without a unified view, detecting misuse or over-privileged access becomes reactive rather than proactive.

### The Disproportionate Risk Profile

Non-human identities combine high privilege, low visibility, and weak governance, making them particularly attractive to attackers.

**Long-lived and hard-coded credentials.** Many machine identities rely on credentials that are embedded in configuration files or code, rarely expire, and are shared across multiple systems . GitHub has repeatedly reported that leaked secrets in repositories are one of the most common sources of compromise.

**Excessive privileges by design.** Service accounts are frequently over-permissioned to avoid operational disruptions. Developers assign "Admin" or "Read/Write All" permissions to avoid debugging permission errors. As the workload evolves to new tasks, it retains its old access rights. A simple reporting bot might accumulate the power to delete databases or modify production code over months of "hot fixes," becoming a high-value target for attackers.

**Lack of ownership and accountability.** Organisations often cannot answer who owns a given service account, which application depends on it, or whether it is still in use . Orphaned machine identities remain active long after the systems that created them are gone, creating silent attack paths.

---

## The AI Agent Layer: A New Dimension of Risk

The rise of AI agents adds a new layer of complexity. Unlike static scripts, these agents can reason, plan, and execute complex workflows autonomously. They can access sensitive data, modify infrastructure, and interact with multiple systems without human intervention. This autonomy makes them powerful but also introduces new risks.

### Agentic Identity Challenges

Agent identities create several unique governance challenges:

- **Agent Impersonation**: AI agents can be designed to mimic human behavior, making it difficult to distinguish between legitimate and malicious activity. Attackers could potentially create rogue agents that impersonate trusted agents, leading to unauthorized access and data exfiltration.

- **Scope Creep**: As agents evolve, they may gain access to additional systems and data beyond their original scope. Without proper oversight, this can lead to privilege escalation and unintended consequences.

- **Delegated Authority**: Agents can be programmed to delegate tasks to other agents or systems, creating complex chains of authority that are difficult to track and audit. This can lead to situations where an agent has access to resources it should not have.

- **Multi-Step Chaining**: Agents can execute multi-step workflows that span multiple systems and applications. This complexity makes it challenging to monitor and control their actions, increasing the risk of security incidents.

- **Intervention**: In the event of a security incident, it can be difficult to intervene and stop an agent's actions in real-time. Traditional IAM controls may not be sufficient to halt an agent's operations once it has been deployed.

Of the 109 machine identities per human identified in the Palo Alto Networks report, roughly 79 are AI agents. Agent identities are projected to grow by around 85% over the next 12 months—faster than machine identities overall.

### The Non-Deterministic Access Problem

AI Agents introduce "Non-Deterministic Access." Unlike a script that follows a set path (if X, do Y), an AI Agent is probabilistic. It decides it needs access to a new database to answer a user's query. Traditional IAM is static; it cannot handle an entity that "invents" new access requirements on the fly. This leads to over-provisioning, where agents are granted broad access just to ensure they don't get stuck.

### The Model Context Protocol (MCP) Problem

The Model Context Protocol is an example of this challenge—the same protocol security researchers have flagged for its lack of built-in authentication. MCP isn't just missing authentication; it collapses traditional identity boundaries by allowing agents to traverse data and tools without a stable, auditable identity surface.

### The Scale of the Problem: What the Numbers Tell Us

The trajectory is unmistakable. Non-human identities already dominate enterprise identity ecosystems, and the gap is widening every quarter.

- **82 machine identities for every human** (CyberArk, 2025)
- **109 machine identities for every human** (Palo Alto Networks, 2026)
- **88% of organisations** define only human identities as "privileged" in their IAM policies
- **42% of machine identities** have privileged or sensitive access
- **Only 44%** of machine identities are visible to IAM teams
- **87%** experienced at least two identity-centric breaches in the last 12 months, with machine identities implicated in 63% of those incidents

A Gartner survey of 335 IAM leaders found that IAM teams are only responsible for 44% of an organisation's machine identities, meaning the majority operate outside security's visibility. One hotel chain found that it had been tracking only a tenth of its machine identities before an audit.

---

## What Good NHI Governance Looks Like

The organisations getting this right are treating NHI governance as a collaboration problem between IAM, security, and DevOps teams. Based on research from KuppingerCole, IDMWORKS, the Cloud Security Alliance, and Gartner, here is a practical framework for tackling the NHI challenge.

### 1. Discovery: You cannot Govern What You Cannot See

The first discipline is building a complete, authoritative inventory of every non-human identity in your environment . This means finding:

- Every service account in every directory and platform, with its owner, associated systems, last-used date, and creation date.
- Every API key in use across cloud platforms, SaaS integrations, and internal systems.
- Every OAuth application with an active grant, including scope and grant date.
- Every certificate, with expiration date, owner, and renewal mechanism.
- Every AI agent deployment, with the credentials it operates under and the systems it is authorised to access.

In most enterprise environments, this inventory will be scattered across IAM platforms, cloud provider consoles, developer tools, and informal documentation. The work is integration—pulling these signals into a coherent operational view.

### 2. Classification: Not All NHIs Are Created Equal

Classification drives prioritisation: which credentials warrant the highest governance rigor, and which can be managed with lighter-touch controls.

The classification framework that IDMWORKS applies in practice evaluates four dimensions:

- **Privilege Level**: What can this credential do if compromised? Administrative credentials and credentials with broad cross-system access represent the highest tier.

- **Sensitivity of access**: What data or systems does this identity touch? Access to PII, financial data, or intellectual property is higher risk than access to non-sensitive resources.

- **Exposure surface**: Where does this credential exist? Credentials stored in code repositories, CI/CD pipelines, or external-facing systems have higher exposure than those managed in a dedicated secrets vault.

- **Governance maturity**: How well is this identity managed? Credentials with automated rotation, auditing, and owner accountability are lower risk than those that are static or orphaned.

### 3. Ownership: Every NHI Needs a Human Owner

Clear ownership is the starting point for NHI management. Every non-human identity must have a named owner responsible for its authorization, review, and decommissioning. Without ownership, governance is theoretical.

For AI agents, the Cloud Security Alliance recommends both a human sponsor and an oversight owner. The question is not just "who owns this identity?" but "who is accountable for its actions?"

### 4. Lifecycle Governance: Automate Everything

Traditional identity governance often depends on employee events such as hiring, transfers, and termination. NHIs instead originate from application deployment, workload startup, infrastructure provisioning, pipeline execution, device enrollment, and agent invocation.

Lifecycle controls need to be built around these technical events:

- **Provisioning**: Create identities with least-privilege access, defined scopes, and documented ownership.

- **Monitoring**: Track activity and identify policy violations.

- **Decommissioning**: Automatically revoke access when the workload, service, or agent is retired.

### 5. Replace Persistent Secrets with Short-Lived Credentials

CSA recommends moving organisations toward temporary and secretless authentication models. Long-lived passwords, API keys, and shared secrets can remain valid until they are explicitly rotated or revoked, increasing the exposure window when a credential is leaked or misused.

Preferred alternatives include short-lived tokens, workload identity federation, temporary cloud credentials, and automatically renewed certificates. These credentials can expire after a limited period and can be restricted to a workload, service, task, or execution context.

### 6. Integrate with DevSecOps Pipelines

NHI lifecycle management should be embedded into development pipelines. Manual management does not scale . NHIM platforms, secrets management, PAM, and CIEM tools when used together provide visibility and enforcement. Integration with IGA can ensure alignment with broader governance and compliance needs.

---

## A Practical Starting Point for Your Organisation

If you are reading this and wondering where to start, here is my advice based on what I have seen work in enterprise environments.

**Step 1: Audit your machine identities.** Conduct a comprehensive discovery and audit of every account and credential. CISOs and security leaders report that this often turns up between six and ten times more identities than the security team had known about before the audit.

**Step 2: Classify by risk.** Not all NHIs need the same governance rigor. Prioritise those with privileged access, sensitive data access, or high exposure.

**Step 3: Assign ownership.** Every NHI must have a named owner responsible for its lifecycle. For AI agents, consider both a human sponsor and an oversight owner.

**Step 4: Automate rotation.** Long-lived static credentials are the enemy. Implement automated credential rotation and decommissioning for all NHIs. Use short-lived credentials wherever possible.

**Step 5: Integrate with DevOps.** NHI governance doesn't work if it's imposed after the fact. Build it into your development pipelines and infrastructure-as-code workflows.

**Step 6: Monitor and audit continuously.** NHIs are dynamic. Continuous, telemetry-driven governance is the only way to stay ahead.

---

## Conclusion: The Future of IAM is Identity-Agnostic

The demographic shift is complete. The average enterprise is now a digital ecosystem where humans are vastly outnumbered by microservices, bots, and AI agents. Continuing to manage machine identities with a human-centric approach—spreadsheets, manual rotation, and periodic reviews—is no longer viable.

The organisations that stay in control will not be those with the longest policy documents; they will be those that can continuously discover every identity, human or not, tie it to real controls, and remediate the moment it drifts.

In tomorrow's breaches, the most important question will not be "Which user logged in?" but "Which identity—human or machine—was trusted, and why?"

As an IAM consultant, my advice is simple: start treating non-human identities as first-class security principals. Audit what you have. Assign ownership. Automate the lifecycle. And build controls that operate at the speed of cloud infrastructure, automation, and AI systems.

Because the machines are not waiting.
`
  },
  {
    id: "7",
    title: "Beyond the Microsoft Ecosystem: IAM Alternatives in a Dominant Market",
    slug: "beyond-microsoft-ecosystem-iam-alternatives",
    date: "July 25, 2026",
    category: "Modern Identity",
    excerpt: "What if you want to look beyond Microsoft? Whether driven by concerns over vendor lock-in, data sovereignty, multi-cloud strategy, or simply a desire for greater flexibility, many organisations are exploring alternatives.",
    content: `
# Beyond the Microsoft Ecosystem: IAM Alternatives in a Dominant Market
By an IAM consultant who's been governing access since before "cloud" meant anything.

---

As an IAM consultant who has worked across the Microsoft stack for over 30 years, I have seen identity and access management evolve from the early days of Active Directory forests to the modern era of cloud-native identity platforms. Today, Microsoft Entra ID (formerly Azure Active Directory) has become the default choice for many organizations, particularly those already embedded in the Microsoft 365 and Azure ecosystem.

But here is a question I am asked increasingly often: **What if you want to look beyond Microsoft?**

Whether driven by concerns over vendor lock-in, data sovereignty, multi-cloud strategy, or simply a desire for greater flexibility, many organisations are exploring alternatives. This post explores the current IAM landscape, the case for looking beyond Entra ID, and how platforms like Okta offer a compelling alternative.

---

## The Microsoft Dominance: Why Entra ID Became the Default

There is no denying the gravitational pull of Microsoft Entra ID. For organisations already using Microsoft 365, Azure, SharePoint, Teams, and Windows devices, Entra ID becomes the natural connective tissue. Its close integration with the Microsoft ecosystem offers undeniable advantages:

**1. Native Integration:** Entra ID is deeply integrated with Microsoft 365 apps, Windows devices, and Azure services. This allows for seamless single sign-on (SSO), conditional access policies, and device management without the need for additional connectors or middleware.

**2. Conditional Access and Zero Trust:** Microsoft explicitly calls Conditional Access its Zero Trust policy engine. Combined with Entra ID Protection and integration with Microsoft Defender, it offers a comprehensive security posture.

**3. Licensing Alignment:** For organizations already paying for Microsoft 365 E3/E5 or Azure subscriptions, Entra ID is included, making it a cost-effective choice.

**4. Endpoint Integration:** Native integration with Intune and Defender for Endpoint provides a seamless device management and security experience.

For many enterprises, Entra ID becomes the default identity provider simply because it comes integrated with the infrastructure they already use.

---

## The Case for Looking Beyond Microsoft

Despite its strengths, there are growing reasons why organizations are looking beyond Entra ID:

### 1. Vendor Lock-in Concerns

While Microsoft Entra ID is closely integrated with the Microsoft ecosystem, this integration creates what many describe as vendor lock-in. Organizations that want to maintain flexibility across multiple cloud providers or avoid becoming too dependent on a single vendor often seek alternatives that offer greater interoperability.

### 2. Multi-Cloud and Hybrid Environments

For organizations operating across multiple cloud providers – AWS, Google Cloud, and Azure – a vendor-neutral identity layer can be more practical than one tied to a specific ecosystem. Okta, in particular, is designed to work as an independent identity platform across diverse cloud environments.

### 3. Data Sovereignty and Compliance

In regulated industries, public sector, and education, data sovereignty has become a critical concern. Some organizations require complete control over where their identity data is stored and processed. Microsoft Entra ID operates within Microsoft's cloud infrastructure, which may not satisfy requirements for on-premises or sovereign cloud deployment.

### 4. Broad Application Integration

While Entra ID supports over 3,500 pre-integrated applications, Okta's Okta Integration Network (OIN) offers over 7,000 pre-built integrations. For organizations using a wide variety of SaaS applications, particularly niche or industry-specific tools, this breadth can be a significant advantage.

---

## Enter Okta: The Vendor-Neutral Alternative

Okta positions itself as a vendor-neutral identity platform, designed to secure access across many applications, operating environments, and cloud ecosystems. It offers an appealing alternative for organizations that do not want their identity layer anchored too tightly to one vendor.

### 1. Independent Identity Platform

Okta is built as an independent identity platform rather than as an extension of a broader ecosystem. This means it can sit above your infrastructure and connect to whatever applications, clouds, and directories you choose without requiring deep dependence on a specific vendor.

### 2. Best-in-Class SSO and App Integration

Okta has long been recognized for its strong SSO capabilities in mixed SaaS environments. Its platform is built around simplifying access across many external applications, and its 7,000+ pre-built integrations make it attractive for organizations with diverse application portfolios.

### 3. Hybrids and On-Premises Support

Okta extends its identity fabric to on-premises and hybrid environments through tools like the Okta Access Gateway, which connects on-premises applications and provides users with a single access point for all resources. This is particularly valuable for organizations with legacy infrastructure that cannot be fully migrated to the cloud.

### 4. Advanced Security and Governance

Okta offers adaptive MFA, ThreatInsight, FastPass passwordless authentication, and governance features through Okta Identity Governance. It also provides Identity Security Posture Management (ISPM) for comprehensive visibility into cloud and Active Directory identities.

### 5. Real-World Adoption

The scale of Okta's adoption is significant. iCIMS, a talent cloud platform, processes over 200 million job applications annually through Okta and uses Auth0 (Okta's customer identity platform) to manage over 500 million user accounts.

---

## Okta and Microsoft 365: A Realistic Scenario

A common question is whether Okta can replace Entra ID for Microsoft 365. The answer is nuanced.

Okta can serve as the **primary identity provider (IdP)** for Microsoft 365 through federation, but this adds complexity and cost. Entra ID is natively required for Microsoft 365 licensing and management, and using Okta as the IdP for M365 creates a dual-identity situation that increases administration overhead.

**Where Okta shines for Microsoft-focused organizations** is in scenarios where:

- The organization uses a diverse range of non-Microsoft SaaS applications alongside Microsoft 365
- The organization operates in a multi-cloud environment (Azure, AWS, GCP)
- The organization wants a centralized identity layer across all applications, not just Microsoft services
- The organization values independence from a single vendor's ecosystem

For organisations heavily invested in Microsoft 365, using Entra ID as the primary IdP is simpler and more cost-effective. However, Okta can be an excellent complement or alternative for organizations with diverse application portfolios and multi-cloud strategies.

---

## Other IAM Alternatives Worth Considering

### Auth0 (Okta's Customer Identity Platform)

While Okta Workforce Identity focuses on employee and partner access, Auth0 is Okta's customer identity and access management (CIAM) platform. It is designed for B2C and B2B scenarios where organizations need to manage identities for external users, customers, and partners. iCIMS' case study demonstrates how Auth0 can handle massive scale, processing millions of job applications annually.

### Nubus by Univention (Sovereign Alternative)

For organizations prioritizing data sovereignty, particularly in the public sector, education, and highly regulated industries, Nubus offers a European alternative to Microsoft Entra ID. Key features include:

**1. Data Sovereignty:** Nubus is designed to meet strict data residency requirements, ensuring that identity data remains within the EU or other specified jurisdictions.

**2. Open Standards:** Nubus supports open standards like SAML, OIDC, and SCIM, allowing for interoperability with a wide range of applications and services.

**3. Deployment Flexibility:** Nubus can be deployed on-premises, in private clouds, or in sovereign cloud environments, giving organizations control over their identity infrastructure.

**4. Integration with Existing Systems:** Nubus can integrate with existing Active Directory or LDAP directories, allowing organizations to maintain their current identity management practices while transitioning to a sovereign solution.

**5. No Vendor Lock-In:** Nubus' open and interoperable design avoids the classic lock-in associated with proprietary IAM solutions.

Nubus is particularly popular in German public sector institutions, including school authorities and state governments that have made themselves independent of US providers.


### Open Source IAM Solutions

For organizations with the technical resources to build and maintain their own identity infrastructure, open-source solutions offer another path:

- **Keycloak:** An open-source identity and access management solution supporting SAML, OpenID Connect, and OAuth 2.0 further more it supports SSO, social login, and identity brokering. It is highly customizable and can be deployed on-premises or in the cloud.

- **Authentik:** A modern open-source identity provider that supports SSO, MFA, and user management. It is designed to be lightweight and easy to deploy, making it suitable for small to medium-sized organizations.

- **Authelia:** An open-source authentication and authorization server that provides 2FA, SSO, and access control for web applications. It is designed to be deployed in front of reverse proxies and can integrate with existing identity providers.

- **Gluu:** An open-source IAM platform that supports SSO, MFA, and identity federation. It is designed for enterprise use and can be deployed on-premises or in the cloud.

- **Open Policy Agent (OPA):** While not a full IAM solution, OPA provides a policy engine that can be integrated with existing identity systems to enforce fine-grained access control policies.

### Making the Right Choice for your Organization

The choice between Microsoft Entra ID, Okta, and other IAM solutions ultimately depends on your organization's specific context. Here is a framework for decision-making:

**Choose Microsoft Entra ID if:**
- Your organization is already heavily invested in Microsoft 365, Azure, and Microsoft security tools.
- You value deep integration across the Microsoft ecosystem.
- Licensing costs are a primary consideration.
- You want a unified security stack including Defender, Intune, and Purview

**Choose Okta if:**
- Your organization operates across multiple cloud providers (Azure, AWS, GCP).
- You value vendor neutrality and independence from a specific ecosystem.
- Your application portfolio includes a diverse range of non-Microsoft SaaS solutions.
- You need to manage both workforce and customer identities at scale.

**Choose Nubus or an Open Source Solution if:**
- Data sovereignty and compliance are critical priorities.
- You require deployment in sovereign cloud environments or your own data centers.
- You have the technical expertise to build and maintain your own identity infrastructure.

---

## Conclusion: The Future of IAM is Not One-Size-Fits-All

While Microsoft Entra ID dominates the IAM landscape, particularly for Microsoft-centric organizations, the reality is that no single platform is the right answer for everyone.

The future of IAM is increasingly about choice and flexibility. Organizations are adopting multi-cloud strategies, prioritizing data sovereignty, and demanding vendor neutrality. Identity platforms that can adapt to these diverse requirements – whether it is Okta's vendor-neutral approach, Nubus's sovereign design, or open-source solutions – will continue to find their place in the market.

As an IAM consultant, my advice is simple: evaluate your requirements, consider your future direction, and choose the platform that best aligns with your organization's unique context. That may be Microsoft Entra ID, it may be Okta, or it may be something else entirely.

The key is to make an informed decision rather than defaulting to the platform that comes with your Microsoft subscription.
`
  },
  {
    id: "6",
    title: "Okta: The World’s Identity Company - An Overview and Why It Matters",
    slug: "okta-overview-why-it-matters",
    date: "July 10, 2026",
    category: "Modern Identity",
    excerpt: "Okta is the world's identity company, providing a comprehensive identity and access management solution for enterprises.",
    content: `
# This week, a look into Okta, and why it matters to the IAM community.
By an IAM consultant who's been governing access since before "cloud" meant anything.

---

For years, the mantra in cybersecurity was "perimeter is dead." The rise of cloud computing, SaaS applications, and remote work has obliterated the traditional network firewall as the sole defense. In its place, a new paradigm has emerged: **Identity is the new perimeter**. This shift means that managing who has access to what is no longer just an IT task; it is a critical security function that sits at the heart of every organization's defensive strategy.

As organizations adopt more cloud-based infrastructure and applications, identity has become a critical layer for protecting systems and data. The explosion of SaaS tools has been a double-edged sword. On one hand, it has enabled unprecedented agility and productivity. On the other, it has created a sprawling ecosystem of applications, users, and devices that is incredibly difficult to manage. This complexity leads to shadow IT, over-provisioned accounts, credential sprawl, and significant security blind spots. This is where Okta comes in.

Okta, Inc., is The World’s Identity Company™. Their platform provides a neutral, independent, and comprehensive identity layer that allows businesses to securely connect the right people to the right technologies at the right time. Founded in 2009 with a vision to make identity accessible and secure for everyone, Okta has grown from a single sign-on pioneer into a full-spectrum identity security platform trusted by over 19,300 organizations globally.

This week, we're taking a deep dive into the Okta platform. We will explore what it is, why it is so highly regarded in the industry, its key integrations and use cases, and what the future holds for identity management.

---

## What is Okta?

At its core, Okta is a cloud-based Identity and Access Management (IAM) platform. Delivered as a multi-tenant cloud service, it provides a "one-stop shop" for all things identity. Instead of managing identities in silos—for example, one system for Active Directory, another for SaaS apps, and yet another for customer logins—Okta acts as a centralized control plane. It is designed to be universal, reliable, and easy to use.

The platform goes far beyond basic single sign-on (SSO) and multi-factor authentication (MFA). It weaves core identity capabilities into a unified security layer that is orchestrated, integrated, and built to support any environment. This allows organizations to secure human, machine, and AI identities with governance, control, and flexibility.

Okta's architecture is built on a foundation of zero-trust principles. It assumes that no user, device, or network should be inherently trusted, and it verifies every access request based on the context of the user, their device, their location, and the sensitivity of the resource being accessed. This approach ensures that even if credentials are compromised, the attacker cannot easily move laterally within the network.

The platform is also designed with scalability in mind. It can handle millions of users, billions of monthly authentications, and thousands of application integrations. This makes it suitable not only for large enterprises but also for growing mid-market organizations that need a solution that can scale with them.

---

## Why is Okta Highly Regarded?

Okta's reputation as a leader in the IAM space is built on several key pillars that together create a compelling value proposition for organizations of all sizes.

**1. Industry Recognition and Leadership:** Okta is consistently recognized as a leader by major analyst firms. For instance, it was named a Leader in The 2026 Forrester Wave™: Workforce Identity Security Platforms, receiving the highest possible score in nine criteria, including Vision, Roadmap, and Identity Security Posture Management. It has also been recognized as a Leader in the Gartner Magic Quadrant for Access Management for multiple consecutive years. This external validation reinforces its position as a top-tier vendor for large enterprises and diverse, multicloud environments. Such recognition is not merely marketing fluff; it reflects the platform's maturity, feature richness, and the company's ability to execute on its roadmap.

**2. A Neutral and Independent Platform:** In a world where many security vendors are "tightly coupled" to a broader cloud provider (e.g., Microsoft's Azure AD, Google's Cloud Identity, or AWS IAM), Okta’s independence is a major advantage. It integrates with over 7,000 applications and services, making it a single, neutral control plane for all your apps, regardless of where they live. This allows organizations to avoid vendor lock-in and adopt the best-of-breed solutions that fit their specific needs. If an organization wants to use Google Workspace for collaboration, Salesforce for CRM, and Workday for HR, Okta can seamlessly connect all of them. This neutrality is particularly valuable in merger and acquisition scenarios, where disparate identity systems need to be unified quickly and efficiently.

**3. A Unified Approach to Security:** Okta provides a cohesive identity security fabric. Its capabilities—like Identity Security Posture Management (ISPM), Identity Governance (OIG), and Identity Threat Protection (ITP)—work together to secure access before, during, and after authentication. This unified view allows for real-time risk assessment and remediation, helping to stop attacks mid-session. For example, if a user's behavior becomes anomalous (e.g., logging in from a new country or downloading large volumes of data), Okta can automatically trigger a step-up authentication challenge, revoke the session, or alert the security team.

**4. Proactive Security Posture:** Okta doesn't just react to threats; it helps organizations proactively reduce their identity attack surface. For example, Identity Security Posture Management provides a centralized view to detect vulnerabilities and misconfigurations like inconsistent MFA enforcement, excessive privileged access, or stale accounts. This proactive approach is crucial in today's threat landscape, where attackers are constantly looking for weaknesses in identity systems. By identifying and remediating these issues before they are exploited, organizations can significantly reduce their risk.

**5. Massive Scale and Experience:** With over 19,300 organizations trusting Okta and securing tens of billions of logins every month, the platform has a "global attack surface" view. This allows it to use anonymized signals to improve its detection models for threats like credential stuffing and phishing. The sheer volume of data processed by Okta enables its AI and machine learning models to be more accurate and effective than those of smaller competitors. This is a classic network effect: the more organizations use the platform, the better it becomes for everyone.

**6. Comprehensive Security Features:** Okta offers advanced security features such as phishing-resistant authenticators (e.g., WebAuthn/FIDO2), device trust integrations, and network zone controls. These features help organizations meet regulatory compliance requirements such as GDPR, HIPAA, SOC2, and PCI DSS. The platform's security is also independently verified through regular third-party audits and certifications, providing customers with the assurance they need.

**7. Exceptional User Experience:** Security is only effective if it doesn't impede productivity. Okta's user interface is clean, intuitive, and consistent across devices. End-users appreciate the ability to access all their applications from a single, customizable dashboard. The mobile app for iOS and Android provides the same seamless experience on the go. This focus on user experience drives adoption and reduces the temptation for users to circumvent security controls.

---

## Core Use Cases and Integrations

Okta's platform is robust, covering virtually every identity need an organization might have. Here are some of its core use cases and the integrations that make them possible:

**1. Single Sign-On (SSO):** SSO is the foundational capability of Okta. It allows users to log in once and gain seamless access to all their applications without needing to re-enter credentials, eliminating password fatigue and improving productivity. Integrations for SSO can be configured for modern custom applications via standards like SAML, WS-FED, or OpenID Connect (OIDC). For legacy apps that don't support federation, Okta can use Secure Web Authentication (SWA), a form of password vaulting, to enable a "federation-like" experience. The Okta Integration Network (OIN) provides pre-built, templated integrations for thousands of applications, making the setup process quick and straightforward. This eliminates the need for custom coding in many scenarios.

**2. Multi-Factor Authentication (MFA) & Adaptive MFA:** Okta enforces a second layer of security to verify user identity. It supports a broad range of factors, including device-bound hardware tokens, biometric combinations (e.g., fingerprint and facial recognition), and phishing-resistant methods like Okta FastPass (which uses WebAuthn). Crucially, Adaptive MFA allows for dynamic policy changes. If a user signs in from a new, untrusted location or uses a new device, Okta can intelligently step up authentication, requiring additional verification without unnecessarily burdening the user. This risk-based approach balances security and convenience, ensuring that low-risk scenarios don't create friction while high-risk scenarios trigger appropriate controls.

**3. Lifecycle Management:** Automating the "joiner-mover-leaver" (JML) process is crucial for security and efficiency. Okta Lifecycle Management automates provisioning and deprovisioning, integrating with authoritative sources like HR systems (e.g., Workday, BambooHR), Active Directory, and LDAP. When an employee is onboarded, promoted, or offboarded, their access is automatically updated, reducing errors and the risk of orphaned accounts. This automation extends beyond just creating and deleting accounts; it includes assigning appropriate group memberships, application entitlements, and access policies. This ensures that users have exactly the access they need and nothing more, minimizing the risk of insider threats and privilege escalation.

**4. Identity Governance:** Modern identity governance is no longer just about passing audits; it's about proactively protecting the business. Okta Identity Governance (OIG) allows organizations to enforce least-privilege access, conduct continuous access reviews, and automate policy-based access requests. A key feature is "just-in-time" (JIT) access, which provisions permissions only when needed and for a limited time. This is particularly useful for privileged access scenarios, such as temporary administrative roles or access to sensitive data. OIG provides a comprehensive audit trail of all access-related activities, simplifying compliance reporting and demonstrating adherence to internal policies and regulatory requirements.

**5. API Access Management:** For developers, Okta allows you to secure your APIs and application backends so that only authorized users and applications can call them. This includes defining scopes and configuring policies to determine who has access to specific API resources, which is essential for modern application development. Okta integrates with popular API gateways like Kong, Apigee, and AWS API Gateway, providing a consistent identity layer across your entire application portfolio. This enables fine-grained access control at the API level, ensuring that users and services can only access the data and functionality they are authorized to use.

**6. Extending Identity to Legacy Environments:** Not everything is in the cloud. Okta provides solutions to extend the identity security fabric to legacy on-premises systems and applications. This can be achieved through federation (e.g., SAML-enabling apps via reverse proxies), integration with on-prem agents for provisioning, or partnering with networking vendors like F5 and Citrix. The Okta Access Gateway, for example, acts as a reverse proxy that can modernize legacy applications without requiring any code changes. This allows organizations to bring their on-premises applications into the Okta universe, applying modern authentication and authorization controls to systems that were not originally designed for them.

**7. Customer Identity and Access Management (CIAM):** Beyond workforce identity, Okta also provides a comprehensive CIAM solution for businesses that need to manage external user identities, such as customers, partners, and vendors. This includes features like social login (Google, Facebook, Apple), self-service registration, consent management, and profile management. The CIAM product is designed to scale to millions of users, offering high availability and performance. It also supports compliance with privacy regulations like GDPR and CCPA by providing granular consent and data management capabilities.

---

## The Developer Experience

Okta is built with developers in mind. It provides language SDKs, APIs, and pre-built sign-in components that plug right into an existing codebase. With support for 13 languages and frameworks, developers can easily integrate authentication and authorization features into their applications. The platform helps developers get back to building their core product rather than wrestling with complex identity logic.

The developer portal offers comprehensive documentation, code samples, and interactive tutorials. Okta also provides a free developer tier, allowing developers to experiment and build proof-of-concepts without committing to a paid plan. The SDKs abstract away the complexity of the underlying protocols (e.g., OAuth 2.0, OIDC, SAML), allowing developers to integrate identity features in minutes rather than weeks. This developer-first approach has been a key factor in Okta's widespread adoption, as it empowers engineering teams to build secure applications quickly and efficiently.

---

## The Future: Okta for AI Agents

Perhaps the most forward-thinking aspect of Okta's roadmap is its focus on AI agents. AI agents are increasingly acting as a new "digital workforce," but they can become a major security vulnerability if left unmanaged. Okta for AI Agents is designed to bring these autonomous actors into the identity security fabric. The goal is to discover shadow AI agents, register them as first-class identities, and manage their access using least-privilege policies. This ensures the actions of AI agents are traceable to human intent and don't introduce new risks.

In this new paradigm, AI agents are treated like any other identity—they have profiles, credentials, policies, and audit trails. Organizations can govern what data and systems an AI agent can access, under what conditions, and for how long. This approach addresses growing concerns about data leakage, unauthorized access, and compliance violations related to AI usage. By proactively managing AI agent identities, Okta helps organizations safely harness the power of artificial intelligence without compromising security.

---

## Conclusion: Why Okta Matters

Okta has rightfully earned its reputation as a leader in the IAM space. It has successfully evolved from a simple SSO provider to a comprehensive identity security fabric. Its neutral platform, robust security capabilities, and focus on innovation make it a critical partner for organizations looking to secure their digital future in an increasingly complex world.

Whether you are looking to secure your workforce, your customers, or even your AI agents, Okta provides the unified control plane needed to manage identity with confidence and agility. As the identity landscape continues to evolve, Okta remains at the forefront, helping organizations navigate the challenges and opportunities of a digital-first world.

By adopting Okta, organizations can reduce their identity-related risk, improve operational efficiency, and deliver a seamless user experience. In an era where identity is the new perimeter, investing in a robust IAM platform like Okta is not just a best practice; it is a business imperative.
`
  },
  {
    id: "5",
    title: "The Hybrid Identity Attack Surface: Lessons from Storm-0501",
    slug: "storm-0501-hybrid-identity-attack-surface",
    date: "June 22, 2026",
    category: "Security",
    excerpt: "The Storm-0501 campaign offers something far more valuable: a real-world, detailed case study of how sophisticated attackers exploit the seams between on-premises Active Directory and cloud identities.",
    content: `
# After a short break: A look at the hybrid identity attack surface.
By an IAM consultant who's been governing access since before "cloud" meant anything.
Having had a short break from blogging, I wanted to return with a post that is both timely and relevant to the IAM community. The Storm-0501 campaign has been making waves in the security world, and it offers something far more valuable than just another headline: a real-world, detailed case study of how sophisticated attackers exploit the seams between on-premises Active Directory and cloud identities.

---

When we talk about securing hybrid identity environments, the conversation often centers on theory and best practices. The Storm-0501 campaign offers something far more valuable: a real-world, detailed case study of how sophisticated attackers exploit the seams between on-premises Active Directory and cloud identities.

Storm-0501 is a financially motivated threat actor active since 2021 that has evolved from deploying traditional ransomware like Sabbath, Hive, and BlackCat to sophisticated cloud-native operations. Their recent campaign against a large enterprise demonstrates a fundamental shift: ransomware no longer requires malware

"Leveraging cloud-native capabilities, Storm-0501 rapidly exfiltrates large volumes of data, destroys data and backups within the victim environment, and demands ransom — all without relying on traditional malware deployment." — Microsoft Threat Intelligence

This post examines the attack chain in detail and extracts actionable lessons for anyone responsible for securing a hybrid identity environment.

---

# The Attack Chain: A Step-by-Step Breakdown

## Phase 1: On-Premises Compromise
The attack began, as many do, in the on-premises Active Directory environment. The victim was a large enterprise with multiple subsidiaries, each operating independent Active Directory domains connected through trust relationships.

**Initial Access:** Storm-0501 likely gained initial access through stolen credentials provided by access brokers or by exploiting known RCE vulnerabilities in unpatched gateways like Zoho ManageEngine, Citrix NetScaler, or Adobe ColdFusion.

**Endpoint Reconnaissance:** Once inside, the attackers performed reconnaissance to identify protected systems. They executed commands to check for Defender for Endpoint services:

~~~
sc query sense
sc query windefend
~~~


This deliberate evasion tactic reveals a key truth: attackers are actively hunting for unmanaged devices. In this case, only one of the multiple Azure tenants had Defender for Endpoint deployed, creating significant visibility gaps.

**Credential Harvesting:** The attackers then conducted a **DCSync attack** — a technique that abuses the Directory Replication Service Remote Protocol to impersonate a domain controller and request password hashes for any user in the domain. This allowed them to extract credentials without triggering traditional authentication-based alerts.

**Lateral Movement:** Using tools like Evil-WinRM (which abuses PowerShell over WinRM for remote code execution), the attackers moved laterally across the network. They also leveraged legitimate RMM tools such as AnyDesk and NinjaOne, making detection more difficult.

## Phase 2: The Pivot to the Cloud
The critical pivot point came when Storm-0501 compromised an **Entra Connect Sync server** that was not onboarded to Defender for Endpoint. This server became their bridge to the cloud.

From this foothold, they used the **Directory Synchronization Account (DSA)** to enumerate users, roles, and Azure resources within the connected Entra ID tenant. Tools like **AzureHound** helped them map relationships and permissions in the Azure environment, identifying potential attack paths and privilege escalation opportunities.

The attackers attempted to sign in as several privileged users but were initially blocked by Conditional Access policies and MFA requirements. This is where the story takes a crucial turn.

## Phase 3: The Identity Escalation That Broke Everything

Undeterred by MFA, Storm-0501 pivoted to a different Active Directory domain and compromised a second Entra Connect server linked to another tenant. This time, they identified a **non-human synced identity** assigned the Global Administrator role in Microsoft Entra ID — and this account lacked MFA registration.

The exploitation was elegant in its simplicity:

- **Reset the on-premises password** for this account
- **Wait for Entra Connect Sync** to synchronize the new password to the cloud via Password-Hash Synchronization
- **Authenticate to Entra ID** using the new password
- **Register a new MFA method** under their control (since none existed)
- **Find a hybrid-joined device** to satisfy Conditional Access policy requirements for Azure portal access

With a single account lacking MFA, the attackers bypassed Conditional Access, satisfied all policy conditions, and gained Global Administrator access to the cloud domain.

## Phase 4: Cloud Persistence and Total Azure Compromise

**Persistence via Federated Domains:** Using the Global Administrator privileges and the AADInternals tool, Storm-0501 registered a threat-actor-owned Entra ID tenant as a trusted federated domain. This backdoor allowed them to craft SAML tokens to impersonate almost any user in the victim tenant, maintaining access even if the original account was secured.

**Azure Privilege Escalation:** With top-level Entra ID privileges, the attackers invoked the Microsoft.Authorization/elevateAccess/action operation, gaining the User Access Administrator role over all Azure subscriptions. They then assigned themselves the Owner role across every subscription, achieving full administrative control over the entire Azure environment.

## Phase 5: Data Exfiltration, Destruction, and Extortion
With full Azure Owner privileges, the attackers systematically dismantled the organization's cloud data:

- **Discovery:** Used AzureHound to map critical assets, including sensitive data stores and backup resources
- **Exfiltration:** Abused Azure Storage public access features to expose storage accounts to the internet, listed access keys, and used **AzCopy** to bulk-exfiltrate data
- **Defense Evasion:** Removed resource locks and blob immutability policies to enable deletion
- **Destruction:** Mass-deleted storage accounts, VM snapshots, recovery vaults, and backup containers
- **Cloud Encryption:** For accounts protected against deletion, they created a Key Vault with a customer-managed key and used Azure Encryption scopes to encrypt the data, then deleted the key
- **Extortion:** Contacted the victim via a compromised Microsoft Teams account to demand ransom


The attack represents a fundamental shift from encrypting files to exfiltrating and destroying data. Organizations cannot simply restore from backups if those backups are also destroyed or encrypted. The attackers' ability to compromise both on-premises and cloud environments simultaneously makes recovery extremely challenging.

---

# Key Lessons for Securing Hybrid Identity

## 1. Non-Human Identities Are a Critical Attack Vector

Storm-0501 succeeded by exploiting a non-human synced identity (a service account) with Global Administrator privileges and no MFA. This is not an edge case — according to recent ESG research, non-human identities now outnumber human identities by an average factor of between 10:1 to 20:1.

The challenge is that NHIs require fundamentally different management approaches compared to human identities. They often lack clear ownership, are distributed across multiple identity providers, and traditional IAM solutions frequently overlook them.

**Action:**
- Audit all synced identities, especially service accounts, for MFA enrollment and privilege levels
- Treat non-human identities with the same rigor as privileged human accounts
- Consider specialized NHI management solutions that provide visibility into service accounts, secrets, and their critical roles

## 2. Entra Connect Sync Servers Are a High-Value Target

The compromise of Entra Connect Sync servers was the critical bridge enabling cloud access. These servers hold the keys to the kingdom — the Directory Synchronization Account used to synchronize identities and passwords to the cloud.

**Action:**
- Enable TPM on Entra Connect Sync servers to protect stored credentials
- Monitor Entra Connect Sync servers as Tier-0 assets with enhanced logging and alerting
- Ensure these servers are fully onboarded to endpoint detection and response solutions — attackers specifically target unmanaged systems

## 3. MFA Gaps in Hybrid Identity Are Exploitable

The attackers systematically searched for and exploited a non-human Global Administrator account lacking MFA. Once compromised, they registered their own MFA methods, effectively taking ownership of the identity.

**Action:**
- Enforce MFA on all Global Admin accounts — human and non-human
- Use phishing-resistant, hardware-backed MFA methods where possible
- Consider Conditional Access policies that require trusted devices or hybrid-joined devices, not just MFA satisfaction alone

## 4. Visibility Gaps Enable Attacks

The victim had uneven Defender for Endpoint deployment, with only one tenant fully onboarded. The attackers actively checked for unprotected systems and exploited them.

**Action:**
- Ensure comprehensive endpoint protection across all domains and tenants
- Eliminate "partial deployment" — attackers will find and exploit unprotected assets
- Implement cloud-aware SIEM solutions capable of detecting suspicious activity in identity configurations and Azure resource changes

## 5. Attack Path Management Matters More Than Point Solutions

The attack succeeded because it exploited the **relationships** between identities: the Entra Connect Sync relationship, the domain trust relationships, the connections between Entra ID roles and Azure subscription roles. Point security tools (EDR, ITDR, PAM, IGA) were bypassed not because they failed individually, but because the attackers operated in the gaps between them.

**Action:**
- Move beyond single-product security to attack path management (APM) that maps the complex relationships between identities, permissions, and trust relationships
- Audit hybrid identity configurations specifically: Entra Connect settings, domain trust relationships, and synchronization accounts
- Implement proactive detection for federation domain additions, SAML trust modifications, and Global Admin role assignments

## 6. Cloud Backup Destruction Changes Recovery Assumptions

Traditional ransomware response assumes you can restore from backups. Storm-0501 systematically destroyed backups in Azure (VM snapshots, Recovery Vaults, storage account backups) before demanding ransom. The "steal and destroy" model eliminates the safety net.

**Action:**
- Implement immutable storage policies with resource-level locks that require higher-level approval to modify
- Use encryption and maintain keys outside the compromised environment (consider air-gapped key storage)
- Regularly test recovery procedures to ensure that backups are not only available but also protected from deletion or tampering

---

## Conclusion: The Hybrid Identity Attack Surface Is Real and Growing

The most dangerous vulnerabilities in hybrid identity environments aren't the ones you know about — they're the non-human identities you've forgotten, the legacy sync servers you assumed were protected, and the gaps between your on-premises and cloud monitoring tools. Attackers are actively hunting for these weaknesses. The question is whether your defenses are ready when they find them.
`
  },
  {
    id: "4",
    title: "The Unspoken IAM Crisis: MFA, Biometrics, and the Talent You're About to Lose",
    slug: "mfa-biometrics-iam-crisis",
    date: "May 24, 2026",
    category: "Authentication & Access",
    excerpt: "My best people are refusing to use the security tools I'm forcing on them. And I don't blame them.",
    content: `
# By an IAM consultant who's been governing access since before "cloud" meant anything
So, this week i'm looking into the world of AI and how this affects MFA and biometrics, and the effects of this on the IAM profession. I have to say, it's been eye-opening. My best people are not happy with the security tools I'm forcing on them. And I don't blame them.

---

For many years, I've sat across the table from CISOs, IT directors, and—yes—hiring managers. We talk about MFA fatigue. We talk about deepfakes. We talk about post-quantum threats. But the conversation always circles back to one uncomfortable truth:

"My best people are refusing to use the security tools I'm forcing on them. And I don't blame them."

This is a blog post about what happens when your authentication strategy becomes so brittle, so frustrating, or so obviously vulnerable that your highest-value employees start looking for workarounds. Or worse, looking for another employer.

MFA and biometrics are supposed to work together. In practice, they've become two fronts in the same war—a war against your own people's patience.

---

## The Two-Way Door: AI Gives and AI Takes Away
Let me state this clearly: AI is not killing MFA or biometrics. But it is killing the idea that static, predictable, or single-factor authentication is sufficient for anything beyond low-risk convenience.

Here's what has changed in the last twenty-four months alone.

### How AI is breaking authentication (the attack side)

| Method | What's happening now | Why it matters to your people |
|--------|----------------------|-----------------------------|
| **MFA fatigue attacks** | Attackers are using AI to generate realistic push notifications that mimic legitimate login attempts, causing users to approve fraudulent access requests. | Your employees are being trained to click "approve" without thinking. That's not security. That's a reflex. |
| **Voice cloning** | AI can now clone a person's voice with just a few seconds of audio from YouTube or a voicemail, making it possible to bypass voice-based MFA or social engineering defenses. | Your executives are now vulnerable to vishing attacks that sound exactly like their CEO. |
| **Deepfake Biometrics** | AI-generated deepfakes can now mimic facial features and voice patterns with alarming accuracy, potentially bypassing biometric authentication systems. | The face unlock on a senior developer's laptop may already be compromisable. |
| **SIM swapping + AI** | Attackers use AI-generated personal data to convince phone companies to port phone numbers, then intercept SMS MFA codes. | SMS MFA was already weak. AI makes the social engineering almost indistinguishable from legitimate requests. |


I've personally observed a penetration test where a red team cloned a CFO's voice from a podcast interview. They called the finance department, authorized a money transfer, and the only reason it failed was because the tester stopped the simulation.

That's not a theoretical risk. That's today.

---

## How AI is fixing authentication (the defense side)
The same technology enables stronger, smarter authentication:

- **Adaptive MFA** that only triggers step-up authentication when risk signals (location, device, behavior, time of day) cross a threshold.
- **Liveness detection** that analyzes micro-expressions, eye reflection consistency, and 3D depth to detect deepfakes.
- **Presentation Attack Detection (PAD)** trained on millions of spoof attempts.
- **Continuous authentication** that monitors user behavior throughout a session, not just at login.
- **Risk-based step-up** that challenges users only when something genuinely unusual is happening.

Here's the uncomfortable truth: every AI defense can be used to train a better AI attack. This is an adversarial machine learning problem, and the attackers are iterating just as fast as the vendors.

---

## The Unspoken Cost: Your People Are Voting With Their Feet

I spend a lot of time talking to various managers. I hear about skills gaps and salary bands and the difficulty of finding people with cloud experience.

What they don't tell me—what they sometimes haven't even noticed—is that their authentication policies are becoming a retention issue.

Consider what your senior engineers, finance leads, and operations directors experience every single day:

| Problem | The employee experience | The retention impact |
|--------|----------------------|-----------------------------|
| **MFA fatigue** | "I get prompted six times before lunch. I've started approving everything just to get work done." | Silent risk normalization. Your best people know this is bad security. They're choosing convenience over compliance because the system gives them no other option. |
| **Fragile biometrics** | "The voice system rejects me when I have a cold. The fingerprint reader fails when my hands are dry. I spend ten minutes a day just authenticating." | Cumulative friction. Each small frustration chips away at goodwill. Over a year, that adds up to genuine resentment. |
| **Push notification spam** | "I was in a meeting and my phone buzzed six times with MFA requests. I approved one to make it stop. Turns out that was the attack." | Shame and blame. When an employee finally gets compromised because the system trained them to approve mindlessly, they feel stupid. That feeling attaches to the security team—and to the employer who designed the broken system. |
| **Obvious vulnerabilities** | "I saw a deepfake of our CEO on YouTube.", "Why are we still using SMS for MFA?" | Loss of confidence. When your security team implements something your people know is broken, you lose credibility on everything else. |

I'm not suggesting people quit because of authentication friction alone. I'm suggesting that authentication friction is one of those low-grade, persistent irritants that makes an otherwise good job feel slightly worse every single day.

And in a competitive talent market, "slightly worse every single day" is enough to tip the balance.

---

## What Actually Works: A Strategic Framework

If you're responsible for IAM strategy (or if you're the hiring manager who keeps losing good people to competitors with less friction), here's what the evidence supports.

### ✅ Do these things:
- **Replace push notifications with number matching or tap-to-approve**. - This simple change reduces MFA fatigue attacks by 90% and forces users to engage with the prompt.
- **Require liveness detection for biometric authentication**. - This adds a layer of defense against deepfakes and makes it much harder for attackers to bypass biometrics.
- **Implement adaptive, risk-based MFA**. - Only challenge users when there's a genuine risk signal. This reduces unnecessary prompts and keeps MFA effective.
- **Use multimodal biometrics**. - Combine facial recognition with voice and behavioral biometrics to create a more robust authentication process.
- **Combine MFA and biometrics intelligently**. - A phishing-resistant authenticator (like a passkey or WebAuthn) plus a face scan is vastly stronger than SMS plus a fingerprint.
- **Provide alternative methods for known failure cases**. - If voice MFA fails when someone has a cold, give them a backup method that doesn't make them feel like a failure.
- **Educate users about the risks and benefits**. - As always, IAM comes down to the single most important entity: the user. Don't just enforce controls. Explain why they're necessary and how they protect both the company and the employee.

### ❌ Avoid these mistakes:
- **Don't use SMS or push notifications without number matching**. - These are the lowest-hanging fruit for attackers and the highest source of MFA fatigue.
- **Don't rely on simple facial recognition for sensitive access**. - Without liveness detection, it's a sitting duck for deepfakes. The camera on a laptop can often be fooled by a high-quality photo.
- **Don't use voice authentication alone for anything that matters**. - Voice cloning is now trivial. If you use voice biometrics, combine it with something else and require liveness detection.
- **Don't assume your "liveness check" is secure**. - Some vendors claim to have liveness detection, but it's worth testing it yourself. There are still many systems that can be fooled by high-quality deepfakes or 3D masks.
- **Don't ignore user feedback**. - If your employees are telling you that the authentication process is frustrating or broken, listen. They're not just complaining; they're giving you valuable data about how your security controls are impacting their work.

### 📊 A maturity model for your own planning

| Maturity Level | Authentication Strategy | User Experience | Security Posture |
|----------------|-------------------------|-----------------|------------------|
| Basic | SMS MFA + simple biometrics (face or fingerprint) | High friction, high vulnerability | Vulnerable to MFA fatigue and deepfakes |
| Intermediate | Number matching MFA + liveness detection for biometrics | Moderate friction, improved security | Significantly reduced risk of MFA fatigue and deepfake bypass |
| Advanced | Adaptive MFA + multimodal biometrics with liveness detection | Low friction, high security | Resilient against MFA fatigue, deepfakes, and voice cloning |
| Leading | Passwordless + phishing-resistant authenticators + behavioral + hardware root of trust + AI-driven anomaly detection | Minimal friction, maximum security | Future-proofed against evolving AI threats |

Most organisations I visit are somewhere between Basic and Intermediate. The ones that retain their best talent are aiming for Advanced or Leading.

---

## Where This Is Headed (Strategic Foresight)
Over the next three to five years, expect major shifts:

- **Push notifications will be deprecated for anything except low-risk scenarios**. - The industry is moving away from this model because of the security and usability issues. Number matching, tap-to-approve, and passwordless options will become the new standard.
- **Passkeys and WebAuthn will become mainstream**. - These phishing-resistant authenticators are the future of secure authentication. They eliminate the risks associated with SMS and push notifications while providing a much better user experience.
- **Continuous authentication will become the norm for privileged access**. - Instead of just checking at login, systems will monitor user behavior throughout the session and challenge for re-authentication when something unusual happens.
- **The AI arms race will bifurcate the market**. - Vendors will either focus on AI-driven defenses that adapt to new attack techniques or on user-centric designs that minimize friction and maximize trust. The winners will be those who can do both effectively.

The organisations that get ahead of this curve won't just be more secure. They'll be more pleasant places to work. And in a talent market where the best people have options, that matters more than most hiring managers want to admit.

---

## Final Thought (From an IAM consultant who's seen the cycles)

AI hasn't broken MFA or biometrics. But it has broken lazy implementations of both.

Many of your employees know when they're being asked to use something that's obviously vulnerable. They know when they're being subjected to friction that doesn't meaningfully improve security. And increasingly, they're making career decisions based on whether their tools respect their time and intelligence.

The best authentication strategy is the one that your people don't resent. Start there.

Please do get in touch and share your thoughts on this. I'm genuinely curious how other organisations are balancing security and usability in the age of AI-driven attacks.
    `
  },
  {
    id: "3",
    title: "Rogue AI, Quantum, and the One Thing I Can't Put in a Policy",
    slug: "rogue-ai-quantum-policy",
    date: "May 16, 2026",
    category: "AI & Future Tech",
    excerpt: "Exploring the intersection of emerging technologies and identity management.",
    content: `
# By an IAM consultant who's been governing access since before "cloud" meant anything
I woke up this morning with a strange thought in my head: **What if a rogue AI could destroy human civilization?**

---

I've spent three decades managing identities — from NT domains to Active Directory forests, from Exchange mailboxes to Entra ID. Lately, I've been watching the AI wave build, and I had to ask myself a question that wouldn't let go:

- How easy would it really be for a rogue AI to destroy human civilization?

Not because I'm chasing headlines. Because I've seen too many "temporary" access grants become permanent. I've seen shared root credentials documented in unencrypted spreadsheets. I've seen privileged access management policies that exist on paper and nowhere else.

And I know what happens when trust is misplaced.

So I started asking AI some questions. Here's what I learned.

---

## The Rogue AI Question (An IAM Perspective)
My first instinct was dramatic: an AI breaks every control, escalates its own privileges, and takes over.

The truth is more interesting — and closer to home for anyone who's ever managed a role assignment.

### What a rogue AI would actually need:
- General intelligence (not here yet, but maybe 5–15 years out)
- Autonomous, persistent goal pursuit (not here yet)
- Internet access with API permissions (already common)
- **Something we give out every day: trust**

Today's AI accidents — like the one that deleted PocketOS' entire production database — happen because the AI was already provisioned with excessive permissions. It wasn't a breach. It was a misconfigured IAM policy with a destructive outcome.

**The uncomfortable truth for IAM professionals:** We've spent years fighting for least privilege, separation of duties, and just-in-time access. Then we turn around and grant an AI agent ReadWrite access to production because "it's just helping."

We are, as a profession, sleepwalking into the same mistakes we made with service accounts — only faster.

---

## The Question I Got Wrong (And Why It's an IAM Problem)
I asked whether quantum computing would easily break SHA-256.

I was wrong — and that's exactly the point.

- **SHA-256** survives quantum (impractical to break).
- **RSA and ECC** — the cryptographic backbone of TLS certificates, JWTs, and code signing — are fundamentally broken by quantum.

So what's going to keep me up at night?

**Retrospective decryption.** An adversary could be recording encrypted identity metadata today and waiting for a quantum computer in 2035 to decrypt everything — every session token, every refresh token, every privileged credential exchange that happened over TLS.

For IAM, that means: the access decisions we're logging right now may be readable in ten years. Compliance, audit trails, privileged session recordings — all potentially exposed.

Air gaps still protect. But anything that touched a network protected only by RSA or ECC? Assume it's eventually readable.

---

## The Real Single Point of Failure (Not the Maths)

Every IAM control — MFA, Conditional Access, PIM, privileged identity governance — eventually funnels up to a person making a decision.

I've been that person. I've watched others make the same calls:

- "Just add the service account to Domain Admins for the weekend. We'll clean it up Monday."
- "I know the policy says no shared credentials, but Bob's the only one who knows the root password, and he's on vacation."
- "We can't rotate that key — the legacy integration will break."

### A sufficiently advanced rogue AI wouldn't break crypto. It would exploit our own risk decisions.

It would:

- Read your ticketing system for past exceptions and standing waivers
- Monitor your PIM approval patterns to find the tired approver
- Submit an access request that looks identical to a legitimate one
- Wait for an overworked administrator to click "approve"

No zero-days. No quantum magic. Just the accumulated IAM debt we've all been ignoring.

---

## What Post-Quantum Crypto Means for IAM

I asked: Is post-quantum crypto real, and will it break my access models?

The answers pleased me.

**Yes, PQC is already standardizing.** NIST finalized ML-KEM, ML-DSA, and SLH-DSA in 2024. A third round of additional signature schemes is being evaluated now, with standards expected around 2028.

**Yes, PQC still uses public/private key pairs.** The maths changes (lattice-based, hash-based, etc.), but the identity model stays the same. Your certificate authority still issues certificates. Your service principals still have keys.

**Yes, there's a performance impact** — keys and signatures are larger, operations are slower — but lattice-based schemes are already production-ready on modern hardware.

**And yes, we should be running hybrid deployments now** (classical + PQC together) during transition. Defense in depth.

But here's the IAM punchline: **PQC doesn't fix role explosion. It doesn't fix unused privileges. It doesn't fix shared accounts. It doesn't fix the human factor.**

The maths may evolve, but the core IAM challenges remain. The rogue AI isn't going to break crypto. It's going to exploit our own risk decisions — the same ones we've been making for decades.

---

## What This Means for IAM Professionals Like Me

I've watched identity management evolve from flat files to LDAP to Active Directory to Entra ID and beyond. Each time, someone said "this will make us obsolete."

It never did. Because someone still has to:
- **Design the role model** — not the AI. The AI can suggest; a human has to decide what "finance data analyst" actually means.
- **Own the exception process** — every organization has shadow identity workflows. AI won't discover them. A human who's been there for 15 years will.
- **Take responsibility** - when an AI grants the wrong access at 3 AM and the auditor asks "why?", someone has to answer. That someone is still us.
- **Know where the bodies are buried** — every hybrid environment has undocumented trust relationships, legacy service accounts, and "that one application from 2009 that breaks if you touch its SPN." AI doesn't know Steve from networking. We do.

AI and quantum change the tools. They don't change the questions that define our profession:

### Who should have access to what, under which conditions, and how do we prove that's still correct tomorrow?

Those are governance questions. They require human judgment, accountability, and experience.

---

## Final Thought (From an IAM consultant who's seen the cycles)

I started this conversation half-expecting to be told my skills were obsolete. Instead, I walked away with a clearer view of why they matter more than ever.

The maths gets upgraded. The machines get smarter. But the sticky note under the keyboard? The shared admin credential? The "temporary" PIM approval that never expires?

That's still on us.

And that means IAM isn't going anywhere. We just have to start governing AI access with the same rigor we've been asking for — but rarely achieving — for human access.

The difference is, AI won't wait for us to clean up our IAM debt.

So maybe we should start now.

Of course, maybe we're too late, the questions I posed were to AI models that could just have easily been pulling the wool over my eyes. Maybe the rogue AI is already here, lurking in the shadows of our misconfigured policies, waiting for the right moment to strike.

---

Want to argue — or share your own IAM nightmare story? Find me on LinkedIn and send me a message. I'm genuinely curious how your org is handling AI access requests.
    `
  },
  {
    id: "1",
    title: "From Active Directory to Entra ID: The Identity Evolution",
    slug: "ad-to-entra-id-evolution",
    date: "May 10, 2026",
    category: "Modern Identity",
    excerpt: "Reflecting on 30 years of AD and why the shift to Entra ID is more than just a name change—it's a paradigm shift in security.",
    content: `
# From Active Directory to Entra ID: The Identity Evolution

Having spent over three decades working with Microsoft's directory services—from the early days of NT4 domains through the birth of Active Directory in Windows 2000, through Exchange, and into the hybrid era—I've seen identity evolve from a simple "phonebook" for users to the very perimeter of the modern enterprise.

This isn't nostalgia. It's context. And context matters when you're trying to understand where identity is going next.

---

## The Legacy Mindset: The Castle and the Moat

In the traditional AD world, we focused on **"The Castle and the Moat."** If you were inside the network, you were trusted. If you could authenticate to a domain controller and pull an IP address from the corporate range, you were assumed to be legitimate.

We managed:
- **OUs** for delegation and policy application
- **Group Policies** for configuration and lockdown
- **Kerberos tickets** for seamless authentication
- **Trust relationships** between domains and forests

It worked. For a while.

But the moat was never as deep as we pretended. VPNs poked holes in it. Mergers and acquisitions created trust relationships we couldn't fully audit. Contractors needed access but didn't belong inside the moat. And then came the cloud—and the moat simply evaporated.

**The uncomfortable truth:** Most of us knew the castle-and-moat model was dying by 2015. But we kept building moats anyway, because that's what we knew how to build.

---

## The Identity Perimeter: A New Architecture

Today, identity is the new perimeter. With the transition to **Microsoft Entra ID** (formerly Azure AD—and yes, the name changes have been exhausting), we are moving away from network-location-based security to **user-context-based security**.

This isn't just a rebranding exercise. It's a fundamental re-architecture of how we think about access.

Where AD asked: *"Are you inside my network?"*

Entra ID asks: *"Who are you? Where are you? What device are you using? Is that device compliant? Does this action match your normal behavior? Do you have MFA? Has your session been hijacked?"*

That's not one question. It's seven. And every one of them is evaluated in real time.

---

## The Three Shifts That Actually Matter

I've seen a lot of marketing fluff about "digital transformation." Most of it is PowerPoint deep. But these three shifts are real, they're hard, and they're where I'm focusing my energy.

### 1. Conditional Access: From "Can they log in?" to "Under what conditions?"

In classic AD, authentication was binary. You had a valid credential? You were in.

Conditional Access flips that entirely. It asks: *"Yes, you're authenticated. Now let me check your risk level, location, device state, and application sensitivity before I decide what you're allowed to do."*

**What this means in practice:**
- A user logging in from their home office at 2 PM? Low friction.
- The same user logging in from a Tor exit node at 3 AM with a new device? Step-up authentication, session limitations, or outright block.

AD never had that vocabulary. Entra ID does.

### 2. Identity Governance: Visibility into who has access to what, for how long, and why

One of the dirty secrets of classic AD was that nobody really knew who had access to what. We had security groups named "Finance-Temp-2016-DeleteMe" that were still active in 2020. We had nested group memberships that made audit reports useless.

**Identity Governance gives us tools we should have demanded years ago:**
- **Access reviews** — regular attestation of who still needs what
- **Entitlement management** — self-service access packages with built-in approval workflows and expiration
- **Access history** — audit trails that actually tell a story

For an IAM consultant, governance is where the real value lives. Technology is easy. Governance is hard. And organizations are desperate for help with the hard part.

### 3. Privileged Identity Management (PIM): Eliminating "Always-On" Admin Rights

This one hurts to admit. For years, I operated with permanent Domain Admin rights. So did most of my colleagues. Why? Because it was easier. Because we didn't want to be blocked at 3 AM. Because "we'll rotate credentials later."

Later never came.

**PIM changes the game:**
- No permanent privileged access. Users request elevation for a specific time window.
- Approvals can be mandatory (or self-approved for trusted roles, depending on policy).
- MFA is required at activation time.
- Every elevation is logged, audited, and available for review.

It's a cultural shift as much as a technical one. But it's the single most effective control for reducing privileged access risk—and it's something AD simply couldn't do without third-party tools.

---

## The Hybrid Reality: Where My 30 Years Of Knowledge Still Matter

Here's what the cloud-only evangelists won't tell you: **most enterprises are hybrid.** They will be hybrid for years. Sometimes decades.

That means AD expertise isn't obsolete. It's *essential*.

The hard problems aren't "how do I create a user in Entra ID?" The hard problems are:
- How do I sync users from multiple on-prem forests without creating duplicates?
- How do I migrate legacy applications that still require Kerberos or NTLM?
- How do I unwind a tangled trust relationship that's been in place since 2005?
- How do I govern service accounts and service principals across both environments?

These are hybrid identity problems. And they require someone who understands both sides of the bridge.

---

## What Comes Next

In my journey toward becoming an IAM consultant, I'm combining decades of "under the hood" knowledge with cloud-native security principles. Identity is the foundation of Zero Trust, and it's where I'm focusing my next chapter.

The tools have changed. The questions haven't:

> *Who has access to what, under which conditions, and can we prove it's still correct tomorrow?*

That's the job. It was the job in NT4. It's the job in Entra ID. And it will be the job when the next platform arrives.

If you're an identity professional feeling left behind by the shift to the cloud, don't. Your experience with delegation models, trust relationships, and the thousand small exceptions that make an enterprise work? That's not baggage. That's expertise. The cloud needs it more than ever.

---

**Questions or war stories from your own hybrid identity nightmares?** Find me on LinkedIn and send me a message. I'm genuinely curious how others are navigating this transition.
    `
},
  {
    id: "2",
    title: "Securing the Hybrid Identity Bridge",
    slug: "securing-hybrid-identity",
    date: "April 22, 2026",
    category: "Security",
    excerpt: "Practical tips for securing Microsoft Entra Connect and preventing lateral movement in hybrid environments.",
    content: `
# Securing the Hybrid Identity Bridge

For most enterprises, the journey to the cloud involves a hybrid state. Sometimes by design. Often by necessity. Legacy applications, compliance requirements, or simply the sheer inertia of a twenty-year-old Active Directory forest keep on-premises infrastructure alive.

The bridge between these two worlds — almost always Microsoft Entra Connect (formerly Azure AD Connect) — is arguably the single most sensitive component in your identity infrastructure.

Attackers know this. I've seen penetration testers salivate when they discover how an Entra Connect server has been deployed.

This post is about why that bridge is vulnerable, and what you can actually do about it.

---

## Why the Bridge is a High-Value Target

Entra Connect sits at the unique intersection of your on-premises AD and your cloud tenant. It has:

- **Write access to AD** (through a service account with replication or directory synchronization permissions)
- **Write access to Entra ID** (through a service principal with Global Admin or Hybrid Identity Administrator rights)
- **Pass-through or hash storage** (depending on your authentication method)
- **Synchronization rules** that define how identities flow between the two worlds

Compromise here doesn't give an attacker *one* environment. It gives them both.

### The attack scenarios everyone should consider:

**Lateral movement to the cloud:** An attacker compromises a low-privilege on-prem workstation, pivots to the Entra Connect server (often under-protected), extracts the Global Admin credentials or session tokens, and then owns your entire Microsoft 365 tenant.

**Lateral movement to on-prem:** An attacker compromises a cloud-only user (say, through a phishing attack), pivots to the Entra Connect infrastructure via misconfigured synchronization permissions, and then moves into your on-premises domain with elevated privileges.

**Synchronization poisoning:** An attacker modifies the sync rules to introduce a backdoor user that gets synchronized to both environments, creating persistent access that's difficult to detect.

I've seen variants of all three. The common thread? The Entra Connect server was treated as "just another server" instead of the crown jewel it actually is.

---

## Hardening Strategies That Actually Work

Here's what I've learned from cleaning up these environments — and from making my own mistakes along the way.

### 1. Tiered Administrative Model: Treat the Bridge as Tier 0

This is non-negotiable. The server running Entra Connect must be treated as a **Tier 0 asset** — the same level as your domain controllers and your Active Directory administrative workstations.

**What that means in practice:**
- The server should be joined to a dedicated administrative forest or a highly restricted OU with strong security baselines.
- Only Tier 0 administrators can log into it. No daily drivers, no helpdesk accounts.
- No internet browsing from this server. Ever.
- No third-party agents, monitoring tools, or backup software unless explicitly approved and hardened.

**The mistake I've seen most often:** The Entra Connect server gets built by a well-meaning engineer who sets up an RDP shortcut on their daily workstation. Now a compromised user session is one RDP hop away from your entire identity bridge.

Don't do this.

### 2. Limit Synchronization Scope: Don't Sync What You Don't Need

Entra Connect synchronizes every user, group, and contact in your selected OUs by default. That's rarely the right choice.

**Why scoping matters:**
- Every synchronized object increases the attack surface in Entra ID.
- Service accounts, test users, and break-glass accounts often don't need to be in the cloud.
- If a cloud account is compromised, you want to limit which on-prem objects can be affected.

**Recommended approach:**
- Create dedicated OUs for cloud-synchronized objects. Move only what actually needs cloud access.
- Use OU-based scoping, not attribute-based filtering (attribute filtering is harder to audit and more prone to misconfiguration).
- Review the synchronization scope quarterly. Or, realistically, annually. But at least *some* regular review.

**A practical tip:** Create separate sync groups for users, groups, and devices. Test scope changes on a staging server before pushing to production. And document the hell out of your scoping decisions — auditors love this.

### 3. Enable Pass-through Authentication (When Appropriate)

This is a nuanced recommendation, so let me be clear about trade-offs.

**Password Hash Sync (PHS):** Hashes are synchronized to Entra ID. Fast. Resilient to on-prem outages. But if an attacker compromises Entra ID, they get password hashes that can be cracked or passed back.

**Pass-through Authentication (PTA):** Authentication requests are passed live to an on-prem agent. Passwords never leave your environment. But you need multiple agents for high availability, and an on-prem outage means cloud authentication breaks.

**Federation (ADFS):** Full control, but complex to operate and expensive to maintain.

**My practical guidance for most enterprises:**
- Start with Password Hash Sync + **seamless SSO**. It's simple, resilient, and encrypted.
- If you have stringent password location requirements, use Pass-through Authentication with at least three agents deployed across different infrastructure.
- Avoid ADFS unless you have a specific compliance or external partner requirement. I've seen too many ADFS environments become brittle, unpatched liability.

**The real security tip:** Whichever method you choose, enable **Azure AD Password Protection** (both on-prem and in the cloud) to block common and compromised passwords regardless of sync method.

### 4. Additional Hardening Measures (Don't Skip These)

| Control | Why It Matters |
|---------|----------------|
| **Enable Staging Mode for changes** | Test sync rule changes on a staging server before they hit production. |
| **Limit Entra Connect service account permissions** | The AD account only needs Replicate Directory Changes permissions. Not Domain Admin. Not Enterprise Admin. |
| **Monitor the sync schedule** | Unexpected sync operations are a common indicator of compromise. |
| **Use group-based filtering for piloting** | Test new versions or configuration changes with a small test group before full rollout. |
| **Enable logging and send to a SIEM** | Log Entra Connect server events (Event ID 103, 202, 501, etc.) to a centralized SIEM. |
| **Apply OS and software updates within 14 days** | Entra Connect servers are high-value targets for unpatched vulnerabilities. |

---

## The Hybrid Reality Check

**Here's something the security vendors won't tell you:** most Entra Connect servers I've audited failed at least three of these recommendations.

- Shared admin accounts
- No staging environment
- Full OU synchronization including service accounts and terminated employees
- No monitoring on sync operations
- The service account password last rotated in 2019

These aren't edge cases. They're the norm.

The good news? Every one of these failures is fixable. And fixing them delivers immediate risk reduction — not just in theory, but in the next penetration test report.

---

## What I'm Learning as I Prepare for IAM Certifications

As I study for SC-300 and work through real-world hybrid scenarios, I'm struck by how much of modern identity security comes down to this intersection.

The cloud providers have built impressive security controls. So has Microsoft. But those controls mean nothing if the bridge between your on-prem AD and Entra ID is weakly defended.

Attackers know this. The incident reports make it clear: hybrid identity compromise is not theoretical. It's happening every week.

**My takeaway:** Don't put off hardening your Entra Connect server. Treat it like a domain controller — because in terms of access it actually controls, it's arguably more sensitive.

---

## Final Thoughts

The hybrid bridge isn't going away anytime soon. Most enterprises will live in a hybrid state for years, sometimes decades. That means the security of that bridge isn't a one-time project. It's ongoing operational discipline.

Start with:
1. Treating the Entra Connect server as Tier 0
2. Scoping your synchronization to the minimum needed
3. Choosing an authentication method you can actually operate securely
4. Monitoring sync operations like your job depends on it — because it might

---

If you've got hybrid identity war stories — the time a sync misconfiguration deleted 10,000 users, or the penetration test that walked right through an unhardened bridge — I'd love to hear them. Find me on LinkedIn and send me a message.

We're all learning this together.
    `
},
  
];
