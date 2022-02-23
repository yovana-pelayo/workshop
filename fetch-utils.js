const SUPABASE_URL = 'https://swgiucfleoaonawjlvme.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Z2l1Y2ZsZW9hb25hd2psdm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTIxNjEsImV4cCI6MTk2MDAyODE2MX0.KwPiwmAFu_q_7yxOSUYv4k6Ejgu8uDsvfsGLixOpD9o';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}
export async function getConcerts() {

    const resp = await client.from('concert_title').select(`*, person_ticket(*)`);
    return checkError(resp);
}

export async function createTicket(person) {
    const resp = await client.from('person_ticket').insert(person);
    console.log(person);
    return checkError(resp);
}
export async function deletePerson(id) { const response = await client .from('person_ticket')
    .delete()
    .match({ id: id })
    .single();
return checkError(response);
}
export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
