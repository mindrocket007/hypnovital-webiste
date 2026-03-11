import { sanityClient } from '@/sanity/client'
import { products as fallbackProducts, coaches as fallbackCoaches } from '@/lib/data'

// -------- Audio-Produkte --------

export async function getAudioProducts() {
  try {
    const data = await sanityClient.fetch(
      `*[_type == "audioProduct" && isActive == true] | order(_createdAt asc) {
        _id,
        "id": slug.current,
        "slug": slug.current,
        title,
        shortDescription,
        price,
        currency,
        stripePriceId,
        downloadFileKey,
        category,
        isActive,
        coverImage
      }`
    )
    return data?.length ? data : fallbackProducts
  } catch {
    return fallbackProducts
  }
}

export async function getAudioProductBySlug(slug: string) {
  try {
    const data = await sanityClient.fetch(
      `*[_type == "audioProduct" && slug.current == $slug && isActive == true][0] {
        _id,
        "id": slug.current,
        "slug": slug.current,
        title,
        shortDescription,
        longDescription,
        price,
        currency,
        stripePriceId,
        downloadFileKey,
        category,
        isActive,
        coverImage
      }`,
      { slug }
    )
    return data || fallbackProducts.find((p) => p.slug === slug) || null
  } catch {
    return fallbackProducts.find((p) => p.slug === slug) || null
  }
}

// -------- Coaches --------

export async function getCoaches(filters?: {
  country?: string
  region?: string
  specialization?: string
}) {
  try {
    let query = `*[_type == "coach" && isActive == true`

    const params: Record<string, string> = {}

    if (filters?.country) {
      query += ` && country == $country`
      params.country = filters.country
    }
    if (filters?.region) {
      query += ` && region == $region`
      params.region = filters.region
    }
    if (filters?.specialization) {
      query += ` && $specialization in specializations`
      params.specialization = filters.specialization
    }

    query += `] | order(name asc) {
      _id,
      "id": slug.current,
      "slug": slug.current,
      name,
      city,
      region,
      country,
      email,
      phone,
      shortBio,
      specializations,
      offersCorporateWorkshops,
      photo,
      isActive
    }`

    const data = await sanityClient.fetch(query, params)
    return data?.length ? data : fallbackCoaches
  } catch {
    return fallbackCoaches
  }
}

export async function getCoachBySlug(slug: string) {
  try {
    const data = await sanityClient.fetch(
      `*[_type == "coach" && slug.current == $slug && isActive == true][0] {
        _id,
        "id": slug.current,
        "slug": slug.current,
        name,
        city,
        region,
        country,
        email,
        phone,
        website,
        shortBio,
        fullBio,
        specializations,
        offersCorporateWorkshops,
        photo,
        isActive
      }`,
      { slug }
    )
    return data || fallbackCoaches.find((c) => c.slug === slug) || null
  } catch {
    return fallbackCoaches.find((c) => c.slug === slug) || null
  }
}

// -------- Events --------

export async function getEvents() {
  try {
    const data = await sanityClient.fetch(
      `*[_type == "event" && isActive == true] | order(eventDate asc) {
        _id,
        "slug": slug.current,
        title,
        eventDate,
        startTime,
        endTime,
        city,
        country,
        venue,
        deliveryMethod,
        topic,
        type,
        price,
        shortDescription,
        bookingUrl,
        "coach": coachReference->{
          name,
          shortBio,
          "photoUrl": photo.asset->url
        }
      }`
    )
    return data ?? []
  } catch {
    return []
  }
}

export async function getEventBySlug(slug: string) {
  try {
    return await sanityClient.fetch(
      `*[_type == "event" && slug.current == $slug && isActive == true][0] {
        _id,
        "slug": slug.current,
        title,
        eventDate,
        startTime,
        endTime,
        city,
        country,
        venue,
        deliveryMethod,
        topic,
        type,
        price,
        shortDescription,
        detailedDescription,
        content,
        bookingUrl,
        "coach": coachReference->{
          name,
          shortBio,
          "photoUrl": photo.asset->url,
          "profileSlug": slug.current
        }
      }`,
      { slug }
    )
  } catch {
    return null
  }
}

// -------- Seiteninhalte --------

export async function getPageContent(slugValue: string) {
  try {
    return await sanityClient.fetch(
      `*[_type == "page" && slug.current == $slug][0] {
        title,
        seoTitle,
        seoDescription,
        heroHeadline,
        heroSubline,
        introText
      }`,
      { slug: slugValue }
    )
  } catch {
    return null
  }
}
