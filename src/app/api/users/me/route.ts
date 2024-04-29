import userFixture from '@fixtures/user.json'

export async function GET() {
  return Response.json({
    data: userFixture.data.user,
    status: userFixture.status,
    error: userFixture.error,
  })
}
