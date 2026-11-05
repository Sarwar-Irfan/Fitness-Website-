import React, { useState } from 'react';
import { Check, Zap, Sparkles, ShieldCheck, Flame, ArrowRight } from 'lucide-react';

export default function Membership({ onOpenJoinModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  // 20% discount on annual
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      badge: 'Starter',
      priceMonthly: 29,
      priceAnnual: 23,
      tagline: 'Ideal for independent lifters seeking essential equipment & access.',
      highlighted: false,
      features: [
        'Gym Access (Standard Hours: 6AM - 10PM)',
        'Basic Equipment & Free Weights Zone',
        'Locker Room & Shower Access',
        'Free High-Speed Wi-Fi',
        'Iron Elite Mobile App Tracker'
      ],
      notIncluded: [
        'Personal Training Sessions',
        'Access to Group HIIT & Spin Classes',
        'Infrared Sauna & Cold Plunges',
        'Custom Nutrition Protocol'
      ],
      ctaText: 'Select Basic'
    },
    {
      id: 'premium',
      name: 'Premium',
      badge: 'MOST POPULAR',
      priceMonthly: 49,
      priceAnnual: 39,
      tagline: 'The sweet spot for athletes demanding rapid results and structured guidance.',
      highlighted: true,
      features: [
        'All Basic Features Included',
        '24/7 Unlimited Facility Access',
        'Personal Training (2 Sessions/mo)',
        'Unlimited Group Classes (HIIT, Spin, Yoga)',
        'Recovery Suite (Sauna & Steam)',
        'Complimentary Guest Passes (2/mo)'
      ],
      notIncluded: [
        'Dedicated 1-on-1 Nutritionist',
        'Reserved Olympic Lifting Platforms'
      ],
      ctaText: 'Claim Premium'
    },
    {
      id: 'elite',
      name: 'Elite',
      badge: 'VIP ATHLETE',
      priceMonthly: 79,
      priceAnnual: 63,
      tagline: 'The ultimate all-inclusive protocol for peak competitive athletes and executives.',
      highlighted: false,
      features: [
        'All Premium Features Included',
        'Personalized Workout Plan & Biometrics',
        'Custom Nutrition Guidance & Macro Periodization',
        'Priority Access to Platinum Olympic Platforms',
        'Unlimited Cryotherapy & Cold Plunge Sessions',
        'Direct 24/7 Trainer WhatsApp Hotline',
        'Quarterly InBody DEXA Body Composition Scans'
      ],
      notIncluded: [],
      ctaText: 'Unlock Elite VIP'
    }
  ];

  return (
    <section id="membership" className="section-wrapper membership-section">
      <div className="bg-ambient-glow" style={{ top: '40%', left: '30%' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Sparkles size={15} />
            <span>MEMBERSHIP TIERS</span>
          </div>
          <h2 className="section-title">
            INVEST IN YOUR <span className="highlight">PHYSIQUE.</span>
          </h2>
          <p className="section-description">
            Transparent pricing with zero hidden maintenance fees. Pick the tier that matches
            your drive, level up your training, and dominate your fitness goals.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="billing-toggle-container">
            <span className={`toggle-label ${billingCycle === 'monthly' ? 'active' : ''}`}>
              Billed Monthly
            </span>
            <button
              type="button"
              className={`toggle-switch-btn ${billingCycle === 'annual' ? 'annual-active' : ''}`}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              aria-label="Toggle between monthly and annual billing"
            >
              <span className="toggle-switch-slider" />
            </button>
            <span className={`toggle-label ${billingCycle === 'annual' ? 'active' : ''}`}>
              Billed Annually
              <span className="save-badge">SAVE 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnual;
            return (
              <div
                key={plan.id}
                className={`pricing-card ${plan.highlighted ? 'highlighted-plan' : ''}`}
              >
                {/* Popular / VIP Badge */}
                {plan.highlighted && (
                  <div className="popular-ribbon">
                    <Flame size={14} />
                    <span>{plan.badge}</span>
                  </div>
                )}

                {!plan.highlighted && (
                  <div className="plan-standard-badge">
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="pricing-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>

                  <div className="plan-price-wrap">
                    <span className="price-currency">$</span>
                    <span className="price-amount">{price}</span>
                    <span className="price-cycle">/month</span>
                  </div>

                  {billingCycle === 'annual' && (
                    <span className="annual-billed-note">Billed annually (${price * 12}/yr)</span>
                  )}
                </div>

                <div className="pricing-divider" />

                {/* Features List */}
                <div className="pricing-features-wrap">
                  <span className="features-list-title">What's Included:</span>
                  <ul className="plan-features-list">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="plan-feature-item included">
                        <div className="check-icon-circle">
                          <Check size={14} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA Button */}
                <div className="pricing-card-footer">
                  <button
                    type="button"
                    className={plan.highlighted ? 'btn-primary plan-btn' : 'btn-secondary plan-btn'}
                    onClick={() => onOpenJoinModal(`${plan.name} Plan ($${price}/mo)`)}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={17} />
                  </button>
                  <p className="plan-guarantee">30-Day Money-Back Guarantee • No Long Contract</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Membership FAQ / Perks Bar */}
        <div className="membership-perks-bar">
          <div className="perk-box">
            <ShieldCheck size={24} className="perk-icon" />
            <div>
              <h4>Zero Joining Fees</h4>
              <p>Transparent rates with no surprise registration fees or hidden lock-ins.</p>
            </div>
          </div>
          <div className="perk-box">
            <Zap size={24} className="perk-icon" />
            <div>
              <h4>Free Gym Induction</h4>
              <p>Every member receives an induction session & biomechanics body assessment.</p>
            </div>
          </div>
          <div className="perk-box">
            <Sparkles size={24} className="perk-icon" />
            <div>
              <h4>Freeze Anytime</h4>
              <p>Traveling or taking time off? Freeze your membership for up to 60 days per year.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
