import Navbar from "@/components/Navbar";
export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
}
