import newslettersFixture from '@fixtures/newsletters.json'

export async function GET() {
  return Response.json({
    data: newslettersFixture.data.newsletters,
    status: newslettersFixture.status,
    error: newslettersFixture.error,
  })
}
