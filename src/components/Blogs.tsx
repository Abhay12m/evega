import BlogCard from "./BlogCard"

const blogData = [
    {
        img: "/post-1.jpg",
        desc: "Enim labore commodo reprehenderit aliqua voluptate. Aliqua amet reprehenderit do adipisicing duis. Esse duis velit adipisicing et pariatur laborum ex minim consectetur aliqua reprehenderit incididunt enim officia.",

    },
    {
        img: "/post-2.jpg",
        desc: "Enim labore commodo reprehenderit aliqua voluptate. Aliqua amet reprehenderit do adipisicing duis. Esse duis velit adipisicing et pariatur laborum ex minim consectetur aliqua reprehenderit incididunt enim officia.",

    },
    {
        img: "/post-3.jpg",
        desc: "Enim labore commodo reprehenderit aliqua voluptate. Aliqua amet reprehenderit do adipisicing duis. Esse duis velit adipisicing et pariatur laborum ex minim consectetur aliqua reprehenderit incididunt enim officia.",

    },
    {
        img: "/post-4.jpg",
        desc: "Enim labore commodo reprehenderit aliqua voluptate. Aliqua amet reprehenderit do adipisicing duis. Esse duis velit adipisicing et pariatur laborum ex minim consectetur aliqua reprehenderit incididunt enim officia.",

    },
]

const Blogs = () => {
  return (
    <div className="py-20">
      <div className="container">
        <h2 className="text-xl md:text-4xl pb-4 sm:pb-0">Our Blogs</h2>
    {/* Grid */}

    <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
    {
                    blogData.map((blog, index) => (
                        <BlogCard
                        key={index}                        
                        img={blog.img}
                        desc={blog.desc}
                        />
                    ))
                }
                </div>
        </div>
        </div>
  )
}

export default Blogs