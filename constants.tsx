
import React from 'react';
import { CaseStudy, IdentityPath } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'THE CATEGORY KINGMAKER',
    category: 'Authority Building',
    problem: 'An enterprise founder was seen as just another service provider in a saturated tech market.',
    shift: 'Moved from feature-led marketing to founder-led intellectual leadership.',
    execution: 'Architected a 12-month visual authority campaign and proprietary methodology rollout.',
    result: '4x increase in inbound high-ticket inquiries within 6 months.',
    image: 'https://picsum.photos/seed/cs1/1200/800'
  },
  {
    id: '2',
    title: 'LUXURY TIER PIVOT',
    category: 'Brand Scaling',
    problem: 'A premium agency was stuck in price wars with low-budget competitors.',
    shift: 'Aggressive brand decontamination and repositioning into the Ultra-High-Net-Worth market.',
    execution: 'Complete identity overhaul and cinematic content deployment targeting elite decision-makers.',
    result: 'Average deal size increased from $25k to $180k.',
    image: 'https://picsum.photos/seed/cs2/1200/800'
  }
];

export const IDENTITY_PATHS: IdentityPath[] = [
  {
    id: '1',
    slug: 'authority',
    title: 'BUILD MY PERSONAL AUTHORITY',
    description: 'Transform from industry expert to the indisputable category leader.'
  },
  {
    id: '2',
    slug: 'scale',
    title: 'SCALE MY COMPANY BRAND',
    description: 'Leverage founder identity to drive enterprise-level trust and velocity.'
  },
  {
    id: '3',
    slug: 'luxury',
    title: 'ENTER THE LUXURY TIER',
    description: 'Exit the price wars and position your offer as a high-intent investment.'
  },
  {
    id: '4',
    slug: 'performance',
    title: 'BUILD A PERFORMANCE ENGINE',
    description: 'Systematize authority distribution to ensure consistent strategic flow.'
  }
];
