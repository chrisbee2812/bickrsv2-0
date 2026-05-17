import { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
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
