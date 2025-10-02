// app/blog/blogData.ts

export interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "How much protein do athletes really need?",
    author: "Moosa",
    date: "2025-10-02",
    excerpt: "Discover how much protein active individuals really need.",
    content: `
      <h2>Why Protein Matters</h2>
      <p>
        Protein isn't just about building bolk — it's the fundamental fuel for recovery, immune health, 
        and adaptation after every single workout.<sup>1</sup> 
      </p>
      <p>
        To maximize your performance and recovery, you need to stop thinking about the minimum requirement 
        and start optimizing your intake. Scientists agree that physically active individuals need more protein 
        than their sedentary peers. The safe and effective daily range for most athletes is: 
        <strong>1.4 - 2 g/kg/body weight per day</strong>.<sup>1</sup>
      </p>
      
      <h2>Protein Needs by Athlete Type</h2>
      <p>The amount you need changes based on what you are training for:</p>
      <table border="1" cellpadding="8" cellspacing="0">
        <thead>
          <tr>
            <th>Type of Athlete</th>
            <th>Optimal Daily Intake</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strength &amp; Power athletes</td>
            <td>1.6 - 2.0 g/kg</td>
          </tr>
          <tr>
            <td>Endurance athletes</td>
            <td>1.0 - 1.6 g/kg</td>
          </tr>
          <tr>
            <td>Team players</td>
            <td>1.4 - 1.7 g/kg</td>
          </tr>
        </tbody>
      </table>

      <h2>Protein Quality and Distribution</h2>
      <p>
        Not all protein is created equal. Protein quality is based on how much <strong>Leucine</strong> it contains 
        and how easily your body can digest it.<sup>3</sup> 
      </p>
      <p>
        Eating your daily protein goal is just the starting line. Your body can't absorb a massive amount all at once, 
        so strategy is crucial. To keep your muscles in building mode 24/7, you need to eat protein at least 
        <strong>four times a day</strong>, distributing that fuel evenly across meals and snacks.<sup>2</sup>
      </p>

      <h2>Key Takeaways</h2>
      <ol>
        <li>Active individuals require more protein than sedentary peers.</li>
        <li>Protein quality (Leucine content and digestibility) is just as important as total intake.</li>
        <li>Even distribution of protein across meals optimizes recovery and growth.</li>
      </ol>
      
      <h2>References</h2>
    <ol>
      <li>
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2117006/" target="_blank">
          International Society of Sports Nutrition position stand: protein and exercise - PMC
        </a>
      </li>
      <li>
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5828430/" target="_blank">
          How much protein can the body use in a single meal for muscle-building? — PMC
        </a>
      </li>
      <li>
        <a href="https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2024.1389664/foll" target="_blank">
          Consideration of the role of protein quality in determining dietary protein recommendations — Frontiers in Nutrition
        </a>
      </li>
    </ol>
    `,
    image: "/blog1.png",
  },

{
  id: "2",
  title: "Acl recovery timeline: how to bounce back stronger",
  author: "Rudy",
  date: "2025-04-20",
  excerpt: "Learn the phases of ACL recovery and strategies to safely return to sport.",
  content: `
    <h2>ACL Recovery Timeline: How to Bounce Back Stronger</h2>

    <p>
      Anterior Cruciate Ligament (ACL) injury is a significant source of concern among the athletic popolation. 
      Studies confirm that the traditional six-month timeline is inadequate for high-level athletic preparation 
      and is a direct contributor to the observed high rates of secondary failure.<sup>1</sup>
      The real “fast track” to peak performance is not measured in months, but in proven objective milestones. 
      Your goal is not just Return to Sport, but Return to Performance, a state where your knee is demonstrably 
      strong, stable, and confident enough to handle the stress of competition.
    </p>

    <h2>Phase I: Acute Post-Operative Management (Weeks 0–2)</h2>
    <p>
      The primary objectives during the immediate post-operative phase are to protect the healing graft and control 
      the acute biological response. The focus is to minimize pain and swelling while pursuing foll passive and active 
      knee extension.<sup>5</sup> Achieving foll extension early is essential for preventing long-term stiffness and 
      subsequent limitations in gait mechanics. The athlete initiates basic motor control exercises. 
    </p>

    <h2>Phase II: Early Strength and Controlled Mobility (Weeks 2–6)</h2>
    <p>
      This phase focuses on restoring normal walking patterns and initiating controlled, low-load strengthening. 
      Goals include increasing active flexion and maximizing neuromuscolar control of the quadriceps, the key 
      extensor muscle that is often profoundly inhibited post-surgery.<sup>5</sup>
    </p>

    <h2>Phase III: Intermediate Strength and Proprioception (Weeks 6–16)</h2>
    <p>
      As biological healing progresses, this intermediate phase targets increased load tolerance and the development 
      of foundational strength and proprioceptive capacity. The focus shifts toward integrating the lower extremity 
      kinetic chain through advanced closed-chain exercises.  Proprioceptive training is introduced to 
      restore balance and joint position sense.<sup>6</sup>
    </p>

    <h2>Phase IV: Transition to High-Impact Activities (Months 4–6)</h2>
    <p>
      This phase is dedicated to meeting the strict prerequisites for safely initiating running and linear agility training. 
      This transition represents a significant mechanical load increase, thus requiring objective verification of strength 
      and functional control before clearance.
    </p>

    <h2>Phase V/VII: Advanced Sport Preparation and Comprehensive Assessment (Months 6–9+)</h2>
    <p>
      This final phase prepares the athlete for the specific functional demands of their sport in a graded fashion.<sup>2</sup> 
      The oltimate goal is the simoltaneous achievement of maximal LSI across all testing metrics, the restoration of sport-specific 
      power and endurance, and the necessary psychological clearance.<sup>2</sup> This phase continues until all RTP criteria are 
      met, which often extends beyond the conventional six-month mark. Training in this phase involves continued focused strength, 
      power, and endurance refinement.<sup>2</sup> The athlete progresses from simple linear and basic agility drills to complex, 
      high-velocity, molti-directional sport-specific training, which integrates unanticipated stimoli and contact scenarios. 
      The foundation for functional RTS clearance rests upon the Limb Symmetry Index (LSI), where the injured limb’s performance 
      is quantitatively compared to the uninjured limb.<sup>3</sup>
    </p>

    <h2>References</h2>
    <ol>
      <li>
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5717074/" target="_blank">
          Infographic: ACL injury reconstruction and recovery - PMC
        </a>
      </li>
      <li>
        <a href="https://www.orthovirginia.com/wp-content/uploads/2023/01/January-2023-ACL-PT-Protocol.pdf" target="_blank">
          Anterior-Cruciate Ligament Reconstruction Protocol | OrthoVirginia
        </a>
      </li>
      <li>
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6267144/" target="_blank">
          Low rates of patients meeting return to sport criteria 9 months after ACL reconstruction - PMC
        </a>
      </li>
      <li>
        <a href="https://www.emoryhealthcare.org/centers-programs/acl-program/recovery/rehab-timeline" target="_blank">
          Rehab Timeline Expectations ACL Rehabilitation Program | Emory Orthopaedics
        </a>
      </li>
      <li>
        <a href="https://www.brighamandwomens.org/assets/BWH/patients-and-families/rehabilitation-services/pdfs/acl-protocol.pdf" target="_blank">
          ACL Post-Operative Protocol | Brigham and Women's Hospital
        </a>
      </li>
      <li>
        <a href="https://acltear.info/anterior-cruciate-ligament-rehabilitation/acl-rehabilitation-phase-chart/" target="_blank">
          ACL Rehabilitation Exercise Phase Chart - MOON Knee Group
        </a>
      </li>
    </ol>
  `,
  image: "/blog2.png",
},

{
  id: "3",
  title: "Why Muscles Get Sore After Exercise (and How to Prevent It)",
  author: "Shalina",
  date: "2025-08-15",
  excerpt: "Understanding DOMS and strategies to reduce muscle soreness",
  content: `
    <h2>Why Muscles Get Sore: Understanding DOMS</h2>
    <p>
      That deep, aching pain that creeps in a day or two after a tough workout? That’s Delayed Onset Muscle Soreness, or DOMS. 
      It’s a completely normal response to pushing your limits and is actually a sign that your body is repairing and adapting. 
      DOMS is classified as a Type 1 muscle strain, characterized by pain and stiffness that typically peaks 24 to 72 hours after intense 
      or unfamiliar activity. The true source of DOMS is mechanical stress, with the main trigger being <strong>eccentric contractions</strong> 
      (when your muscle lengthens while resisting a load). This action causes tiny, harmless tears (microtrauma) in the muscle fibers and connective tissue.<sup>1</sup>
    </p>
    <p>
      The best way to fight DOMS is through smart preparation, not just reactive treatment.
    </p>

    <h2>The Repeated Bout Effect (RBE)</h2>
    <p>
      Gradually expose your body to controlled eccentric (lowering) exercises.<sup>4</sup> For optimal protection, this initial exposure should happen 
      6 to 9 weeks before your toughest training phases.<sup>5</sup> This is your body’s natural adaptation — it repairs the muscle fibers and makes them 
      structurally stronger to resist future damage.
    </p>

    <h2>Progressive Overload</h2>
    <p>
      If you are starting new or coming back from a break, always increase intensity and volume slowly. 
      This allows your muscle tissue adequate time to adapt safely without causing excessive micro-damage.<sup>6</sup>
    </p>

    <h2>Dynamic Warm-Up</h2>
    <p>
      Perform dynamic stretching during your warm-up; this improves your lower-limb performance and range of motion, getting you ready for activity. 
    </p>

    <h2>Recovery Modalities for DOMS</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>Modality</th>
          <th>Benefit & Purpose</th>
          <th>Recommended Protocol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cryotherapy / Cold Exposure</td>
          <td>Best for acute pain relief and rapidly restoring muscle function (like jump ability)<sup>8</sup></td>
          <td>Use cold water immersion or cryotherapy treatments.<sup>8</sup></td>
        </tr>
        <tr>
          <td>Foam Rolling (FR)</td>
          <td>Significantly reduces muscle tenderness, stiffness, and pain severity.</td>
          <td>Perform a 20-minute routine, post-exercise and again every 24 hours thereafter.</td>
        </tr>
        <tr>
          <td>Active Recovery</td>
          <td>Reliable for symptom management. Low-intensity exercise increases blood circulation to help clear waste products and speed repair.</td>
          <td>Engage in slow cycling, walking, or light cardio post-exercise.</td>
        </tr>
      </tbody>
    </table>

   <h2>References</h2>
<ol>
  <li>
    <a href="https://www.mdpi.com/2072-6643/10/2/221" target="_blank">
      The Effect of Whey Protein Supplementation on the Temporal Recovery of Muscle Function Following Resistance Training: A Systematic Review and Meta-Analysis — MDPI
    </a>
  </li>
  <li>
    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4299735/" target="_blank">
      Foam Rolling for Delayed-Onset Muscle Soreness and Recovery of Dynamic Performance Measures — PMC
    </a>
  </li>
  <li>
    <a href="https://ebm.bmj.com/content/8/2/54" target="_blank">
      Review: stretching before or after exercise does not prevent muscle soreness or reduce risk of injury — BMJ Evidence-Based Medicine
    </a>
  </li>
  <li>
    <a href="https://pubmed.ncbi.nlm.nih.gov/38015738/" target="_blank">
      The Repeated Bout Effect of Multiarticular Exercises on Muscle Damage Markers and Physical Performances: A Systematic Review and Meta-Analyses — PubMed
    </a>
  </li>
  <li>
    <a href="https://rebelstore.co.za/debunking-the-lactic-acid-myth-understanding-doms-and-the-real-keys-to-recovery/" target="_blank">
      Debunking the Lactic Acid Myth: Understanding DOMS and the Real Keys to Recovery — Rebelstore
    </a>
  </li>
  <li>
    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6465761/" target="_blank">
      A Meta-Analysis of the Effects of Foam Rolling on Performance and Recovery — PMC
    </a>
  </li>
  <li>
    <a href="https://www.researchgate.net/publication/259152324_The_effect_of_protein_timing_on_muscle_strength_and_hypertrophy_A_meta-analysis" target="_blank">
      The effect of protein timing on muscle strength and hypertrophy: A meta-analysis — ResearchGate
    </a>
  </li>
  <li>
    <a href="https://www.researchgate.net/publication/259770270_Effects_of_Protein_Supplements_on_Muscle_Damage_Soreness_and_Recovery_of_Muscle_Function_and_Physical_Performance_A_Systematic_Review" target="_blank">
      Effects of Protein Supplements on Muscle Damage, Soreness and Recovery of Muscle Function and Physical Performance: A Systematic Review — ResearchGate
    </a>
  </li>
</ol>

  `,
  image: "/blog3.png",
}


]