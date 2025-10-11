# Introduction to CSS

# Types of CSS

# Selectors

## Simple Selectors

- tag name
- grouping(,)
- universal(\*)
- id (#)
- class(.)

## Combinator Selectors

- Descedent Selector (space)
- Direct Child Selector(>)
- Adjacent Sibling(+)
- General Sibling(~)

## Pesudo Class Selectors

- :hover
- :first-child
- :last-child
- :nth-child(1n / even / odd / 2n / 2n + 1 / etc)
- :link
- :visited
- :active
- :any-link
- :checked
- :focus

## Pesudo Element Selectors

- ::before
- ::after
- ::first-line
- ::first-letter
- ::selection
- ::marker

## Attribute Selectors

- TagName[attribute]
- TagName[attribute="value"]

# Text Properties

- color
- text-align
- line-height
- text-transform
- text-decoration
- text-decoration-line
- text-decoration-style
- text-decoration-color
- text-indent
- letter-spacing
- word-spacing
- text-shadow

# Font Properties

- font-size
- font-style
- font-weight
- font-variant
- font-family
- How to get Google Fonts
  - Go to browser
  - search for google fonts
  - click on official site link
  - click on fonts
  - choose font families and click on get font
  - finally, click on get embed code
  - Copy & Paste in HTML Head
  -

# shortcuts

    <div id="box"></div>
    <!-- #box -->
    <div id="box"></div>

    <section id="container"></section>
    <!-- section#container -->
    <section id="container"></section>

    <div class="navBar"></div>
    <!-- .navBar -->
    <div class="navBar"></div>

    <nav class="myNavBar"></nav>
    <!-- nav.myNavBar -->
    <nav class="myNavBar"></nav>

    <div id="box">
        <div class="list-item"></div>
        <div class="list-item"></div>
        <div class="list-item"></div>
        <div class="list-item"></div>
    </div>

    <!-- #box>.list-item*4 -->
    <div id="box">
        <div class="list-item"></div>
        <div class="list-item"></div>
        <div class="list-item"></div>
        <div class="list-item"></div>
    </div>

# Background Properties

- background-color
- background-image
- background-repeat
- background-position
- background-position-x
- background-position-y
- background-size
- background-attachment
- background

# Border Properties

- border
- border-width
- border-style
- border-color
- border-top
- border-bottom
- border-left
- border-right
- border-radius
- border-spacing(table)
- border-collapse(table)

# Box Model

- content box
- padding box
- border box
- margin box

- padding
- border
- margin

# Colors

- colorName
- rgb
- rgba
- HEX - #rrggbb
- HEX - #rgb
- HSL
- HSLA

# Positions

- position:static
- position:relative
- position:absolute
- position:fixed
- position:sticky

- top
- bottom
- left
- right

- z-index

# Float

- float
- clear

# Units

- Absolute Units

  - mm
  - cm
  - inch
  - px

- Relative Units
  - %
  - vw
  - vh
  - em
  - rem

# Display

- display:none
- display:inline
- display:block
- display:inline-block
- display:flex
- display:grid

# Flex Box

- Flex Container Properties

  - display:flex
  - justify-content
  - align-items
  - flex-direction
  - flex-wrap
  - align-content
  - row-gap
  - column-gap
  - gap

- Flex Item Properties
  - Flex-grow
  - Flex-shrink
  - Flex-basis
  - flex
