# DevForge Visual Direction – Implementation Scope

**Status: IMPLEMENTATION SCOPE RECONCILED / DOCUMENTED / NOT IMPLEMENTED**  
**Date: 2026-09-25**

## Authority and baseline

This document records the reconciled implementation scope for the DevForge Visual Direction block.

- Repository: `DrHoschi/DevForge`
- Baseline: `main = 76dfe4de2eb6fd43026117ffea2e5f717ef20c98`
- Product changes authorized by this document: **none**
- Implementation branch authorized by this document: **none**

A separate Implementation Authorization is required before any branch or product-code change.

## Purpose

Modernize the DevForge Hub presentation and responsive information architecture without changing tool identity, capability authority, product semantics, or existing tool implementations.

Visual Direction is a design/reference contract, not a pixel-perfect screenshot specification.

## Minimum runtime file scope

A later implementation is limited to:

- `index.html`
- `main.js`

No existing `tools/*` implementation is in scope.

### index.html

May provide:

- dark DevForge visual shell;
- DevForge hero and brand hierarchy;
- primary area navigation;
- responsive layout/navigation;
- category and All Tools presentation surfaces;
- styles required by those surfaces.

### main.js

May:

- preserve the existing tool registry and tool identities;
- add presentation/category metadata;
- render Start, category and All Tools views;
- filter/present the same tool identity in more than one category where appropriate;
- preserve existing tool URLs and authority/status metadata.

It must not create category-specific copies of tools.

## Information architecture

Primary hierarchy:

- DevForge — “Tools for better worlds”
- Industry — “Plan real systems.”
- Game Development — “Build interactive worlds.”
- Film & Animation — “Bring worlds to life.”
- secondary All Tools access

The three areas are information architecture/presentation categories. Their existence does not itself establish a new product capability.

## Start view

The start view may contain:

- DevForge hero;
- three primary category cards;
- secondary All Tools access.

It must not imply unimplemented application areas are already productive tools.

## Category view

A category view contains:

- compact category identity/hero;
- only relevant entries from the common tool registry;
- shared tools may appear in multiple categories while remaining the same underlying tool and route.

## All Tools

All Tools presents the actual current inventory without inventing additional capabilities.

Authority distinctions must remain visible and semantically correct, including:

- productive/frozen tools;
- available tools;
- historical/prototype tools;
- consolidated redirects;
- prepared/not-implemented entries.

`Atlas Builder` remains `CONSOLIDATED / REDIRECT`.

`Deterministic Pose Renderer` remains `PROTOTYPE / HISTORICAL`.

`Parameter Playground` remains `PREPARED / NOT IMPLEMENTED`.

## Industry boundary

Industry may exist as a primary category even when no current productive tool is assigned to it.

The archived Hallen/Baustellenplaner prototype must not be exposed or described as a current productive DevForge capability by this implementation.

## Responsive contract

### Desktop / iPad Wide

- spacious DevForge hero;
- three primary category cards;
- category overview with relevant tool cards;
- secondary All Tools access.

### iPhone Portrait

- same semantic hierarchy in compact/linear form;
- compact header/navigation;
- stacked hero/category/tool presentation;
- direct navigation between Start, the three areas and All Tools.

Responsive breakpoints may change layout only. They must not change tool identity, authority, status, availability or route semantics.

## Tool navigation

Opening a tool continues to use its existing URL.

No category-specific tool copy or separate category-specific product state is introduced.

A later optional caller-category return context may be added only through separate reconciliation if needed; it is not required by this scope.

## Explicit non-capabilities

The following mockup concepts are not proven current capabilities and are excluded from this implementation:

- Search;
- Projects;
- Library;
- Settings;
- Recent Projects as functional project history.

They must not be presented as working features.

## Artwork boundary

The intended visual direction may use separate artwork for the Forge/Industry, Game and Film/Animation visual worlds.

Artwork requirements:

- artwork contains no baked-in UI text or buttons;
- HTML remains authoritative for titles/navigation/interactions;
- artwork does not create capability authority.

New repository artwork files are **not** implicitly authorized by this two-file runtime scope. If concrete artwork files are to be added, their paths and asset scope require a separate reconciliation/authorization before implementation.

## Authority preservation

The implementation must preserve the current registry’s actual authority/status semantics and existing routes.

It must not:

- implement DF-09;
- revive archived products;
- promote historical/prepared/consolidated entries into productive capabilities;
- modify existing tool behavior;
- alter Frozen Product or Consolidation authority;
- redefine existing contracts.

## Explicit exclusions

Not authorized:

- changes under `tools/*`;
- Search implementation;
- project/library/settings systems;
- new productive tools;
- repository/runtime handoff expansion;
- archived Baustellenplaner revival;
- capability/status reclassification;
- unrelated documentation or refactoring;
- artwork-file additions without separate asset scope.

## Required later verification

A later implementation verification must prove at minimum:

1. only the authorized runtime files, plus any separately authorized artwork assets, changed;
2. all existing tool routes still resolve to the same tools;
3. authority/status semantics remain unchanged;
4. shared tools are not duplicated as separate identities;
5. Start → category → tool and Start → All Tools → tool navigation works;
6. iPhone compact/linear behavior preserves the same semantic hierarchy;
7. desktop/iPad-wide presentation preserves the same authority and routing;
8. Industry does not expose the archived Hallen prototype as productive;
9. excluded mockup concepts are not presented as working features.

## Gate result

**DevForge Visual Direction – Implementation Scope Reconciliation: PASS**  
**DevForge Visual Direction – Implementation Scope Documentation: RECORDED**

Status remains:

**DOCUMENTED / NOT IMPLEMENTED / NOT AUTHORIZED FOR IMPLEMENTATION**

The next permissible step is a separate Implementation Authorization against exactly this scope and baseline.
